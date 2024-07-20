import { Hono } from "@hono/hono";

export const dashboard = new Hono();

dashboard.get("", (c) => {
  console.log(c.req);
  return c.text("Dashboard");
});

dashboard.get("*", (c) => {
  if (c.req.path === "/_") {
    return c.redirect("/_/");
  }
  console.log(c.req);
  return c.text("anything goes");
});
