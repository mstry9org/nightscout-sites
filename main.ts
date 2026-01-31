import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  const url = new URL(req.url);

  // If the request looks like a file (has an extension), serve static file
  if (url.pathname.includes(".")) {
    return serveDir(req, {
      fsRoot: ".",
      urlRoot: "",
    });
  }

  // Otherwise serve the main page
  return serveDir(req, {
    fsRoot: ".",
    urlRoot: "",
    index: "index.html",
  });
});