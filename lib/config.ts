import { dirname, resolve } from "@std/path";
import { array, assert, type Infer, object, string } from "@superstruct/core";

const Config = object({
  routes: array(object({ template: string() })),
});
type Config = Infer<typeof Config>;

export async function loadConfig(
  input?: unknown,
): Promise<{ config: Config; basePath: string }> {
  const configFile = typeof input === "string" ? input : "./src/main.ts";
  const pathToConfigFile = resolve(configFile);
  const basePath = dirname(pathToConfigFile);
  const { config } = await import(pathToConfigFile);
  assert(config, Config);
  return { config, basePath };
}

const defaultConfig: Config = {
  routes: [],
};

export function defineProject(override: Partial<Config>): Config {
  return {
    ...defaultConfig,
    ...override,
  };
}
