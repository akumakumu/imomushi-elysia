import { Elysia } from "elysia";
import { html } from '@elysiajs/html';

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Youne Elysia</title>
    </head>
    <body class="bg-neutral-50">
      <div class="container mx-auto max-w-screen-md py-12">
        <div>
          <p class="text-3xl text-center text-gray-800 font-sans">Hi, Welcome to Youne's <span class="text-rose-600">Elysia</span></p>
        </div>

        <div class="my-10">
          <p class="text-2xl text-justify text-gray-800 font-sans my-3">Introduction <span class="text-rose-600">;</span></p>
          
          <p class="text-2xl text-justify text-gray-800 font-sans my-3">
            Simple endpoint that i develop to learn Bun in my spare time.
          </p>

          <p class="text-2xl text-justify text-gray-800 font-sans my-3">
            Still thinking about what i will do next with this API. In the meantime, enjoy this simple landing page :)
          </p>
        </div>

        <div class="my-1">
          <p class="text-3xl text-center text-gray-800 font-sans">Stack</p>
        </div>

        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center items-center bg-rose-200 w-44 h-10 rounded-md m-1">
            <p class="font-bold font-sans text-center text-gray-700">Bun</p>
          </div>

          <div class="flex justify-center items-center bg-indigo-400 w-44 h-10 rounded-md m-1">
            <p class="font-bold font-sans text-center text-fuchsia-100">Elysia<span class="text-amber-400">JS</span></p>
          </div>

          <div class="flex justify-center items-center bg-gray-400 w-44 h-10 rounded-md m-1">
            <p class="font-bold font-sans text-center text-gray-100">HTM<span class="text-cyan-400">X</span></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);