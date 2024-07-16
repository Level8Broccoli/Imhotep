import { parseArgs } from "@std/cli";

const args = parseArgs(Deno.args);

const { config: c } = args;
const inputFile = typeof c === "string" ? c : "./src/main.ts";

(async () => {
  const { config } = await import(await Deno.realPath(inputFile));
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
