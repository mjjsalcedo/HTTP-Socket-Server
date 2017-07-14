/*jshint esversion: 6 */

const net = require('net');

const server = net.createServer((request) => {

  request.on('data', (data) => {
    console.log(data);
    request.end();
  });

});

server.listen(8080, '0.0.0.0', () => {
  console.log('server bound');

});

