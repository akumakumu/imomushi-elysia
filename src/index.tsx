import { Elysia } from "elysia";
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static'
import { rateLimit } from 'elysia-rate-limit'
import { homePage } from './homepage';

const app = new Elysia()
  .use(rateLimit())
  .use(staticPlugin())
  .use(html())
  .get("/", ({ html }) => html(homePage))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);