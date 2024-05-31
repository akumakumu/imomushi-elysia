import { Elysia } from "elysia";
import { html } from '@elysiajs/html';
import { tailwind } from "@gtramontina.com/elysia-tailwind";

const app = new Elysia()
  .use(html())
  .use(tailwind({
    path: "/public/stylesheet.css",
    source: "./source/styles.css",
    config: "./tailwind.config.js",
    options: {
        minify: true,
        map: true,
        autoprefixer: false
    },
  }))
  .get("/", () => (
    <html lang="en">
      
      <head>
        <title>Elysia.js</title>
      </head>

      <body>
        <h1>Hello World</h1>
      </body>

    </html>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
