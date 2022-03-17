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
        if (data === '\u0003') {
          process.exit();
        }
        if (input === 'w') {
          conn.write('Move: up') 
        }
        if (input === 'a') {
          conn.write('Move: left')
        }
        if (input === 's') {
          conn.write('Move: down')
        }
        if (input === 'd') {
          conn.write('Move: right')
        }
        if (input === 'q') {
          conn.write('Say: too slow')
        }
        if (input === 'g') {
          conn.write('Say: I like yo cut g')
        }
      };

module.exports = setupInput;