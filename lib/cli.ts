import { parseArgs } from "@std/cli";
import { serveFile } from "@std/http";
import { resolve } from "@std/path";
import { assert } from "@std/assert";
import { loadConfig } from "./config.ts";

const args = parseArgs(Deno.args);

async function main() {
  const { config, basePath } = await loadConfig(args.config);
  console.log("Config loaded:", config);

  Deno.serve((req) => {
    const firstRoute = config.routes[0];
    assert(firstRoute !== undefined);
    const template = resolve(basePath, firstRoute.template);
    return serveFile(req, template);
  });
}

main();
