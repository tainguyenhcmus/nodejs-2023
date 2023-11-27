var http = require('http');
var fs = require('fs');

// Read File & Return the content
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);

// Append Specified content, if file does not exist, then Create File
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// The fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file, containing the specified content, will be created
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Delete File 
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// Rename File
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});