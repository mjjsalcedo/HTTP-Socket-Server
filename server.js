/*jshint esversion: 6 */

const net = require('net');
const fs = require('fs');
const path = require('path');

const server = net.createServer((request) => {

var statusLine = "HTTP/1.1 200 OK";
var errorStatusLine = "HTTP/1.0 404 Not Found";
var myServer = "Server: Alpaca Land!";
var Today = "Date: " + new Date();
var Content_Type = "Content-Type: text/html; charset=utf-8";
var Connection = "Connection: Keep-Alive";

var present = statusLine + '\n'+ myServer + '\n'+ Today + '\n' + Content_Type + '\n'+ Connection;

var errorResult = errorStatusLine + '\n'+ myServer + '\n'+ Today + '\n' + Content_Type + '\n'+ Connection;

    request.on('data', (data) => {
      clientRequest = data.toString().split(' ', 3);

        method = clientRequest[0];
        switch(method){
          case 'GET':
                 processGet(clientRequest[1]);
            break;
          case 'HEAD':
                 processHead(clientRequest[1]);
            break;
          default:
              request.end();
        }
    });

    function processHead(file){
      fs.readFile('.' + file, (err, data) => {
        console.log(file);
          if(data !== undefined && file !== '/404.html') {
          var moo = data.toString();
          Content_Length = moo.length;
          present += '\n' + "Content-Length:" + Content_Length + '\n';
          request.write(present);
          request.end();
          } else {
            fs.readFile('./404.html', (err, data) => {
            var moo = data.toString();
            bodyConnection = moo;
            Content_Length = moo.length;
            errorResult += '\n' + "Content-Length:" + Content_Length + '\n';
            request.write(errorResult);
            request.end();
            });
          }
      });
    }

    function processGet(file){
      fs.readFile('.' + file, (err, data) => {
          if(data !== undefined && file !== '/404.html') {
          var moo = data.toString();
          bodyConnection = moo;
          Content_Length = moo.length;
          present += '\n'+ "Content-Length:" + Content_Length + '\n\n' + bodyConnection;
          request.write(present);
          request.end();
          } else {
            fs.readFile('./404.html', (err, data) => {
            var moo = data.toString();
            bodyConnection = moo;
            Content_Length = moo.length;
            errorResult += '\n'+ "Content-Length:" + Content_Length + '\n\n' + bodyConnection;
            request.write(errorResult);
            request.end();
            });
          }
      });
    }
});


server.listen(8080, '0.0.0.0', () => {
  console.log('server bound');

});

