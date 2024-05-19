import { serve } from "./deps.ts";

console.log("http://localhost:8000/");
serve((req) => new Response("Hello World\n"), { port: 8000 });