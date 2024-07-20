import { defineProject } from "#/lib/config.ts";

export const config = defineProject({
  routes: [
    {
      template: "templates/index.html",
    },
  ],
});
