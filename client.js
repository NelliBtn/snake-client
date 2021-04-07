const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', data => console.log(data))
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: NEL')
    
    //setInterval and clearInterval
    const moveUp = setInterval (() => conn.write('Move: up'), 100)
    setTimeout(() =>  clearInterval(moveUp), 7000);

    // OR
    // setTimeout(() => conn.write('Move: up'), 600)
    // setTimeout(() => conn.write('Move: up'), 700)

  })
  return conn;
}

module.exports = { connect };