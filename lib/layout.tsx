import { type JSX } from "@hono/hono/jsx/jsx-runtime";

export function Layout(): JSX.Element {
  return (
    <>
      <head>
        <title>Imhotep</title>
      </head>
      <body>
        <script type="module" src="/_/client/dashboard.js" defer />
      </body>
    </>
  );
}
