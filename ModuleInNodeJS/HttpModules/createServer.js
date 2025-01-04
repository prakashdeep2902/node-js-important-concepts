import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory (__dirname equivalent)

const Port = 8080;
const app = http.createServer((req, res) => {
  const log = `New request received on date ${new Date()}\n`;

  fs.appendFile("ModuleInNodeJS/HttpModules/createlog.txt", log, (err) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error writing log.");
      return;
    }

    switch (req.url) {
      case "/":
        fs.readFile(
          path.join(
            path.dirname(fileURLToPath(import.meta.url)),
            "landingpage.html"
          ),
          "utf-8",
          (err, data) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Error reading the HTML file.");
              return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        );
        break;

      case "/about":
        fs.readFile(
          path.join(
            path.dirname(fileURLToPath(import.meta.url)),
            "aboutPage.html"
          ),
          "utf-8",
          (err, data) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Error reading the HTML file.");
              return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        );

        break;
      case "/shop":
        fs.readFile(
          path.join(path.dirname(fileURLToPath(import.meta.url)), "list.html"),
          "utf-8",
          (err, data) => {
            if (err) {
              res.writeHead(500, { "content-type": "text/plain" });
              res.end("there is error to reading about data");
              return;
            }

            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
          }
        );

        break;

      case "/contact":
        fs.readFile(
          path.join(
            path.dirname(fileURLToPath(import.meta.url)),
            "contact.html"
          ),
          "utf-8",
          (err, data) => {
            if (err) {
              res.writeHead(500, { "content-type": "text/plain" });
              res.end("not able to read file context");
              return;
            }
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
          }
        );

        break;

      default:
        fs.readFile(
          path.join(path.dirname(fileURLToPath(import.meta.url)), "404.html"),
          "utf-8",
          (err, data) => {
            if (err) {
              res.writeHead(500, { "content-type": "text/plain" });
              res.end("Error reading the HTML file");
              return;
            }
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
          }
        );
    }
  });
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
