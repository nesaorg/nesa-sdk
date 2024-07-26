declare module "stream-browserify"
declare module "@lionello/secp256k1-js"
declare module "bn.js"
declare module "elliptic"

interface Window {
  nesaSdkVersion: string
  ethereum?: any,
  keplr?: any;
  getOfflineSigner?: any;
}
