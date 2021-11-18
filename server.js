const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./public/about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./public/contact-me.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./public/404.html", { root: __dirname });
});

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.setHeader("Content-Type", "text/html");
//   let path = "./public/";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/contact-me":
//       path += "contact-me.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     }
//     res.end(data);
//   });
// });

// server.listen(8080, "localhost", () => {
//   console.log("listening for requests on port 8080");
// });
