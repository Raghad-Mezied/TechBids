require('env2')('.env');
const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { Server } = require('socket.io');
// const http = require('http');
const {
  serverError,
  clientError,
} = require('./controllers');
const router = require('./routes');
const { Auction, Product } = require('./models');
const { boomify } = require('./utils');

const app = express();

app.set('PORT', process.env.PORT || 8000);
const server = app.listen(app.get('PORT'), () => {
  console.log('server is running http://localhost:9000');
});

const io = new Server(server, {
  cors: {
    origin: 'https://tech-bids.herokuapp.com/',
    method: 'GET',
  },
});

io.on('connection', (socket) => {
  console.log('user connection', socket.id);

  socket.on('joinRoom', (data) => {
    socket.join(data);
    console.log(`user with id : ${socket.id} join in room : ${data}`);
  });

  socket.on('closeBid', async (id) => {
    const product = await Product.findByPk(id);
    product.is_open = false;
    await product.save();
  });

  socket.on('sendPrice', async (data) => {
    try {
      console.log(data);
      const product = await Product.findByPk(data.room);
      product.auc_amount += product.auc_inc_amount;
      product.winner_id = data.user_id;
      await product.save();
      console.log('sssssssssssssssssssssssssssssssssssssssssssssss', product.auc_amount);
      await Auction.create({
        user_id: data.user_id,
        product_id: data.room,
        amount: product.auc_amount,
        date: data.date,
      });

      socket.to(data.room).emit('receivePrice', {
        user_id: data.user_id,
        room: data.room,
        amount: product.auc_amount,
        date: data.date,
      });
    } catch (err) {
      throw boomify(500, 'Socket Error', 'Socket Error');
    }
  });

  socket.on('disconnect', () => {
    console.log('user Disconnected', socket.id);
  });
});

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

module.exports = { app, server };
