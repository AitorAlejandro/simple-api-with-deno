import { Application } from "https://deno.land/x/abc@v1.0.0-rc8/mod.ts";

const PORT = 3000;

const app = new Application();

app
  .get("/books", () => {})
  .get("/books/:id", () => {})
  .post("/books", () => {})
  .delete("/books/:id", () => {});

// listen to port
app.start({ port: PORT });
console.log(`server listening on port ${PORT}`);
