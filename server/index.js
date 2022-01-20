const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();

let users = [];

io.on('connection', (socket) => {
  console.log('ket noi : ', socket.id);
  socket.on('join', (data) => {
    const { name } = data;

    socket.join('roomchat');

    io.to('roomchat').emit('persion_join', {
      message: `${name} vừa join vào group`,
      users: users
    });

    socket.on('disconnect', () => {
      users = users.filter((item) => item !== name);
      io.to('roomchat').emit('client-out', {
        message: `${name} đã thoát!`,
        users: users
      });
    });
  });

  socket.on('client-to-sever', (data) => {
    io.to('roomchat').emit('sever-to-client', data);
  });
});
app.get('/', (req, res) => {
  res.send('ok');
});

app.post('/', (req, res) => {
  const { name } = req.body;
  if (users.indexOf(name) === -1) {
    users.push(name);
    res.status(200).send('ok');
  } else {
    console.log(users);
    res.status(200).send('no');
  }
});

server.listen(process.env.PORT || 5000, () => {
  console.log('app is running on port 5000');
});
