import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .listen(Bun.env?.PORT ?? 8080);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
