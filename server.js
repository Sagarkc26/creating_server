const http = require("http");
function check(req, res) {
  res.write("Hello, this is Mr. Sagar k.c.");
  res.end();
}

http.createServer(check).listen(3000);
