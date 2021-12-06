require('env2')('.env');
const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const {
  serverError,
  clientError,
} = require('./controllers');
const router = require('./routes');

const app = express();

app.set('PORT', process.env.PORT || 8000);
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

router.use(clientError);
router.use(serverError);

module.exports = app;
