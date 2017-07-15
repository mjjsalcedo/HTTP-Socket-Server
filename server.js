/*jshint esversion: 6 */

const net = require('net');

const server = net.createServer((request) => {
var clientRequest;

///header
var Host = "Host: www.alpacasrule.com";
var Connection = "Connection: Keep-Alive";
var Accept = "Accept: text/html, application/json";
var Today = new Date();

//body includes Host, Accept
var bodyConnection = "Connection:Keep-Alive";
var Content_Length = "Content_Length: 278";

  request.on('data', (data) => {
    clientRequest = data.toString().split(' ', 3);

    if(!clientRequest.includes('HTTP')){
      console.log("moo!");
      request.write(Host);
    }
    request.end();
  });

});

server.listen(8080, '0.0.0.0', () => {
  console.log('server bound');

});

