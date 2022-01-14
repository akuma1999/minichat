const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

// app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

let users = [];

io.on('connection', (socket) => {
  console.log('ket noi : ', socket.id);
  socket.on('join', (data) => {
    const { name } = data;
    console.log(name + ' vừa join vào group');
    socket.join('roomchat');

    socket.on('disconnect', () => {
      io.to('roomchat').emit('client-out', name + ' đã thoát!');
    });

    io.to('roomchat').emit('persion_join', name + ' vừa join vào group');
  });
  socket.on('client-to-sever', (data) => {
    io.to('roomchat').emit('sever-to-client', data);
  });
});

server.listen(3000, () => {
  console.log('app is running on port 3000');
});
