/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "veritas-fe",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    }
  },
  async run() {
    const isProduction = $app.stage === "production"

    new sst.aws.Nextjs("VeritasWeb", {
      path: ".",
      domain: isProduction
        ? {
            name: "veritas.it-t.xyz",
            dns: sst.cloudflare.dns(),
          }
        : undefined,
      regions: ["us-east-1"],
    })
  },
})
