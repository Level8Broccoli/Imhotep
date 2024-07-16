import { parseArgs } from "@std/cli";
import { serveFile } from "@std/http";
import { dirname, resolve } from "@std/path";
import { assert } from "@std/assert";
import { parseConfig } from "./config.ts";

const args = parseArgs(Deno.args);

async function main() {
  const configFile = typeof args.config === "string"
    ? args.config
    : "./src/main.ts";

  const pathToConfigFile = resolve(configFile);
  const basePath = dirname(pathToConfigFile);

  const { config } = await import(pathToConfigFile);
  const parsedConfig = parseConfig(config);
  console.log("Config loaded:", parsedConfig);

  Deno.serve((req) => {
    const firstRoute = parsedConfig.routes[0];
    assert(firstRoute !== undefined);
    const template = resolve(basePath, firstRoute.template);
    return serveFile(req, template);
  });
}

main();
