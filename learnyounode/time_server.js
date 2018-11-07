const net = require('net');

const fillZeros = number => {
  return (number < 10 ? '0' : '') + number;
};

const day = () => {
  const date = new Date();
  return `${fillZeros(date.getFullYear())}-${fillZeros(date.getMonth() + 1)}-${fillZeros(date.getDate())} ${fillZeros(date.getHours())}:${fillZeros(date.getMinutes())}`;
};

net.createServer(socket => {
  socket.end(`${day()}\n`);
}).listen(process.argv[2]);
