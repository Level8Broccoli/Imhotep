import { Hono } from "@hono/hono";
import { logger } from "@hono/hono/logger";
import { parseArgs } from "@std/cli";
import { loadConfig } from "#/lib/config.ts";
import { dashboard } from "#/lib/dashboard.tsx";

const args = parseArgs(Deno.args);

async function main() {
  const { config } = await loadConfig(args.config);
  console.log("Config loaded:", config);

  const app = new Hono();
  app.use(logger());
  app.route("/_/", dashboard);
  Deno.serve(app.fetch);
}

main();
