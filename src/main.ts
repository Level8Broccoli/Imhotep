import { createConfig } from "../lib/config.ts";

export const config = createConfig({
  routes: [
    {
      template: "templates/index.html",
    },
  ],
});
