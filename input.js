
// Stores the active TCP connection object.
let connection; //return conn

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

 const handleUserInput = function () {
    stdin.on('data', (data) => {
      if (key === '\u0003') {
        process.exit();
      }
    })
  }

  stdin.on('data', data => {
    if (keys.hasOwnProperty(data))
    conn.write(keys[data])
  })

  return stdin;
}

const keys = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
}


module.exports = { setupInput }