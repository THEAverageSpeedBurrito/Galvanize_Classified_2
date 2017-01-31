'use strict';

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

app.listen(port, () => {
  console.log('listening on port', port);
});
