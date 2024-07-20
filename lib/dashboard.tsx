import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { Layout } from "#/lib/layout.tsx";

export const dashboard = new Hono();

dashboard.use("*", async (c, next) => {
  c.setRenderer((content) => {
    return c.html(`<!DOCTYPE html><html>${content}</html>`);
  });
  await next();
});

dashboard.get("", (c) => {
  return c.render(
    <Layout>
      <h1>Dashboard</h1>
    </Layout>,
  );
});

dashboard.get(
  "/client/dashboard.js",
  serveStatic({ path: "./lib/client/dashboard.js" }),
);

dashboard.get(
  "/vendor/bulma.min.css",
  serveStatic({ path: "./lib/vendor/bulma.min.css" }),
);

dashboard.get("*", (c) => {
  if (c.req.path === "/_") {
    return c.redirect("/_/");
  }
  console.log(c.req);
  return c.text("anything else");
});
