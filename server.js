/*jshint esversion: 6 */

const net = require('net');
const fs = require('fs');
const path = require('path');

const server = net.createServer((request) => {
var clientRequest;

///header
var statusLine = "HTTP/1.1 200 OK";
var errorStatusLine = "HTTP/1.0 404 Not Found";
var myServer = "Server: Alpaca Land!";
var Today = "Date: " + new Date();
var Content_Type = "Content-Type: text/html; charset=utf-8";
var Connection = "Connection: Keep-Alive";
//body includes Host, Accept
var bodyConnection = "test";
var Content_Length = "test";

var present = statusLine + '\n'+ myServer + '\n'+ Today + '\n' + Content_Type + '\n'+ Connection;

  request.on('data', (data) => {
    clientRequest = data.toString().split(' ', 3);

    if(!clientRequest.includes('HTTP')){
        urlRequest = clientRequest[1];

        switch(urlRequest ){
          case '/':

            break;
          case '/index.html':
                 transform(urlRequest);

            break;
          case '/hydrogen.html':
                 transform(urlRequest);

            break;
          case '/helium.html':
                 transform(urlRequest);

            break;
          case '/404.html':
                 transform(urlRequest);

            break;
          case '/css/styles.css':
                 transform(urlRequest);

            break;
            default: request.end();
        }
      }
  });

  function transform(file){
    fs.readFile('.' + file, (err, data) => {
      //will return contents of file
      if(err) throw err;
      var moo = data.toString();
      bodyConnection = moo;
      Content_Length = moo.length;
      present += '\n'+ "Content-Length:" + Content_Length + '\n' + ' ' + '\n' +bodyConnection;
      console.log(present);
      request.write(present);
      request.end();
    });
  }
});


server.listen(8080, '0.0.0.0', () => {
  console.log('server bound');

});

