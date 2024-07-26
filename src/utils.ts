import { DeliverTxResponse } from '@cosmjs/stargate';
import { sha256, sha512 } from '@cosmjs/crypto';
import { ec } from 'elliptic'
import BN from 'bn.js'

export function createDeliverTxFailureMessage(
  result: DeliverTxResponse,
): string {
  return `Error when broadcasting tx ${result.transactionHash} at height ${result.height}. Code: ${result.code}; Raw log: ${result.rawLog}`;
}

export function Evaluate(privateKey: any, m: any) {
  const EC = new ec('secp256k1');
  const currentKey = EC.keyFromPrivate(privateKey);
  const r = EC.genKeyPair();
  const rBN = r.getPrivate();
  const toBytesInt32 = (num?: any) => {
    return new Uint8Array([
      (num & 0xff000000) >> 24,
      (num & 0x00ff0000) >> 16,
      (num & 0x0000ff00) >> 8,
      num & 0x000000ff,
    ]);
  }
  const Unmarshal = (data: any) => {
    const byteLen = (EC.n.bitLength() + 7) >> 3;
    EC.g.mul(10);
    if ((data[0] & ~1) != 2) {
      return [null, null];
    }
    if (data.length != 1 + byteLen) return [null, null];

    const tx = new BN(data.slice(1, 1 + byteLen));
    try {
      const p = EC.curve.pointFromX(tx);
      return [p.x, p.y];
    } catch (e) {
      return [null, null];
    }
  }
  const H1 = (m: any) => {
    let x = null,
      y = null;
    const byteLen = (EC.n.bitLength() + 7) >> 3;
    let i = 0;
    while (x == null && i < 100) {
      const res = sha512(new Uint8Array([...toBytesInt32(i), ...m]));
      const r = [2, ...res];
      [x, y] = Unmarshal(r.slice(0, byteLen + 1));
      i++;
    }
    return EC.curve.point(x, y);
  }

  // H = H1(m)
  const pointH = H1(m);

  // VRF_k(m) = [k]H
  const point = pointH.mul(privateKey);

  // vrf 65 bytes
  const vrf = point.encode();

  const rgPoint = EC.curve.g.mul(rBN);
  const rhPoint = pointH.mul(rBN);

  const b = [
    ...EC.curve.g.encode(),
    ...pointH.encode(),
    ...currentKey.getPublic().encode(),
    ...vrf,
    ...rgPoint.encode(),
    ...rhPoint.encode(),
  ];
  const one = new BN(1);
  const H2 = (m: any) => {
    const byteLen = (EC.n.bitLength() + 7) >> 3;
    let i = 0;
    while (true) {
      const res = sha512(new Uint8Array([...toBytesInt32(i), ...m]));
      const k = new BN(res.slice(0, byteLen));
      if (k.cmp(EC.curve.n.sub(one)) == -1) {
        return k.add(one);
      }

      i++;
    }
  }
  const s = H2(b);

  const t = rBN.sub(s.mul(currentKey.getPrivate())).umod(EC.curve.n);

  const index = sha256(new Uint8Array(vrf));

  const buf = [
    ...new Array(32 - s.byteLength()).fill(0),
    ...s.toArray(),
    ...new Array(32 - t.byteLength()).fill(0),
    ...t.toArray(),
    ...vrf,
  ];

  return [index, buf];
}