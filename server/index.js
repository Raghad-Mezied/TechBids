/* eslint-disable no-console */
const app = require('./app');

app.listen(app.get('PORT'), () => {
  console.log(`Server in listening at http://localhost:${app.get('PORT')}`);
});
