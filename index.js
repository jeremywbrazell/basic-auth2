'use strict';

const { server } = require('./src/server.js');
const { db } = require('./src/models/index.js');


db.sync()
  .then(() => {
    server.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });