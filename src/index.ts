import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => {
    return {
      msg: "Hi, welcome to my API, please refer to documentation page",
      link: "https://https://github.com/akumakumu/imomushi-elysia"
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
