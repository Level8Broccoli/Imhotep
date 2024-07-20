import { Hono } from "@hono/hono";
import { parseArgs } from "@std/cli";
import { loadConfig } from "./config.ts";
import { dashboard } from "./dashboard.ts";

const args = parseArgs(Deno.args);

async function main() {
  const { config } = await loadConfig(args.config);
  console.log("Config loaded:", config);

  const app = new Hono();

  app.route("/_/", dashboard);

  Deno.serve(app.fetch);
}

main();
