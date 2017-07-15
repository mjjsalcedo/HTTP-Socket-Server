/*jshint esversion: 6 */

const net = require('net');
const user = net.createConnection({ port: 8080 }, '0.0.0.0', () => {
  console.log("connected");
});



/*user.on('data', (data) => {
  console.log(data.toString());
});
user.on('close', (data) => {
  console.log('disconnected from server');
});*/