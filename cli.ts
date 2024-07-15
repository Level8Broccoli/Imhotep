import { parseArgs } from "@std/cli";

const args = parseArgs(Deno.args);

const firstArg = args._[0];
const inputFile = typeof firstArg === "string" ? firstArg : "./index.ts";

(async () => {
  const { config } = await import(inputFile);
  console.log({ config });
})();

type Config = {
  a: string;
};

export function createConfig(opts: Partial<Config>): Config {
  return {
    a: "fallback",
    ...opts,
  };
}
