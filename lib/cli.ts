import { parseArgs } from "@std/cli";
import { serveFile } from "@std/http";
import { dirname, resolve } from "@std/path";

const args = parseArgs(Deno.args);

async function main() {
  const configFile = typeof args.config === "string"
    ? args.config
    : "./src/main.ts";

  const pathToConfigFile = resolve(configFile);
  const basePath = dirname(pathToConfigFile);

  const { config } = await import(pathToConfigFile);
  console.log("Config loaded:", config);

  Deno.serve((req) => {
    const template = resolve(basePath, config.routes[0].template);
    return serveFile(req, template);
  });
}

main();
