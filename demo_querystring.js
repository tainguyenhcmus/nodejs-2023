var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  console.log("🚀 ~ file: demo_querystring.js:7 ~ q:", url.parse(req.url, true))
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);