type Route = {
  template: string;
};

type Config = {
  routes: Route[];
};

const defaultConfig: Config = {
  routes: [],
};

export function createConfig(override: Partial<Config>): Config {
  return {
    ...defaultConfig,
    ...override,
  };
}
