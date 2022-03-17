// const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());
// setupInput();
// establishes a connection with the game server
// const connect = () => {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//     port: 50541
//   });

  // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("Connecting ...");
// connect();

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   stdin.on("data", function (key) {
//     const handleUserInput = function () {
//       if (data === '\u0003') {
//         process.exit();
//       } 
//     };
//   });
//   return stdin;
// };

