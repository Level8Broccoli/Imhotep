import { array, assert, type Infer, object, string } from "@superstruct/core";

const Config = object({ routes: array(object({ template: string() })) });
type Config = Infer<typeof Config>;

export function parseConfig(value: unknown): Config {
  assert(value, Config);
  return value;
}

const defaultConfig: Config = {
  routes: [],
};

export function createConfig(override: Partial<Config>): Config {
  return {
    ...defaultConfig,
    ...override,
  };
}
