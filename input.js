const { connect } = require("http2");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
}
const handleUserInput = function (input) {
        if (input === '\u0003') {
          process.exit();
        }
        if (input === 'w') {
          connection.write('Move: up') 
        }
        if (input === 'a') {
          connection.write('Move: left')
        }
        if (input === 's') {
          connection.write('Move: down')
        }
        if (input === 'd') {
          connection.write('Move: right')
        }
        if (input === 'q') {
          connection.write('Say: too slow')
        }
        if (input === 'g') {
          connection.write('Say: I like yo cut g')
        }
      };

module.exports = setupInput;