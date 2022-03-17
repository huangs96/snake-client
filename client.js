const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server')
    conn.write('Name: SH');
  })

  // conn.on("connect", () => {
  //   setTimeout(() => { conn.write('Move: right')
  // }, 2000)}); 

  // conn.on("connect", () => {
  //   setTimeout(() => { conn.write('Move: down')
  // }, 4000)}); 

  // conn.on("connect", () => {
  //   setTimeout(() => { conn.write('Move: left')
  // }, 6000)}); 

  // conn.on("connect", () => {
  //   setTimeout(() => { conn.write('Move: up')
  // }, 8000)}); 
  

  return conn;
  };

console.log("Connecting ...");
module.exports = connect;

