require('env2')('.env');
const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const router = require('./routes');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    method: 'GET',
  },
});

io.on('connection', (socket) => {
  console.log('user connection', socket.id);

  socket.on('joinRoom', (data) => {
    socket.join(data);
    console.log(`user with id : ${socket.id} join in room : ${data}`);
  });

  socket.on('disconnect', () => {
    console.log('user Disconnected', socket.id);
  });
});

app.use(cors());
app.set('PORT', process.env.PORT || 8000);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
