const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////////////////////
// FILE

// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

// // Non blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("Will read file!");

//////////////////////////////////////////////////
//SERVER

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is either root or overview page");
  } else if (pathName === "/product") {
    res.end("This is product page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello-world",
    });
    res.end("<h1>page is not found!</h1>");
  }
});

server.listen(8000, () => {
  console.log("Working on port 8000");
});
