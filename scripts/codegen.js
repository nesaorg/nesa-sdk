#!/usr/bin/env node

const { join } = require("path");
const { writeFileSync } = require("fs");
const telescope = require("@cosmology/telescope").default;

const outPath = join(__dirname, "/../src/codec");

telescope({
  protoDirs: ["proto"],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      disableAll: false,
    },
    eslintDisable: {
      disableAll: true,
    },
    bundle: {
      enabled: false,
    },
    interfaces: {
      enabled: false,
    },
    prototypes: {
      includePackageVar: true,
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: false,
      methods: {
        fromJSON: true,
        toJSON: true,
        fromAmino: false,
        toAmino: false,
        fromProto: false,
        toProto: false,
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: "timestamp",
        duration: "duration",
        customTypes: {
          useCosmosSDKDec: false,
        },
        num64: "long",
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: ["Msg", "Query", "Service", "ReflectionService", "ABCIApplication"],
    },
    aminoEncoding: {
      enabled: false,
      useLegacyInlineEncoding: true,
    },
  },
}).then(
  () => {
    // Create index.ts
    const index_ts = `
    // Auto-generated, see scripts/codegen.js!
    `;
    writeFileSync(`${outPath}/index.ts`, index_ts);

    console.log("✨ All Done!");
  },
  (e) => {
    console.error(e);
    process.exit(1);
  },
);
