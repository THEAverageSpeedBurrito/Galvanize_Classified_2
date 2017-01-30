
'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/', (req, res) => {
  knex('classifieds')
  .orderBy('id')
  .then((data) => {
    data.forEach((obj) => {
      delete obj.created_at;
      delete obj.updated_at;
    });
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
  });
});

router.get('/:id', (req, res) => {
  knex('classifieds')
  .where('id', req.params.id)
  .then((data) => {
    delete data[0].created_at;
    delete data[0].updated_at;
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data[0]);
  })
})

router.post('/', (req, res) => {
  var {title, price, description, item_image} = req.body;
  var newPost = {
    title,
    price,
    description,
    item_image,
  };

  knex('classifieds')
  .insert(newPost, '*')
  .then((data) => {
    delete data[0].created_at;
    delete data[0].updated_at;
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data[0]);
  });
});

router.patch('/:id', (req, res) => {
  var {title, price, description, item_image} = req.body;

  knex('classifieds')
  .where('id', req.params.id)
  .update({
    title,
    price,
    description,
    item_image
  }, '*')
  .then((data) => {
    delete data[0].created_at;
    delete data[0].updated_at;
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data[0]);
  });
});

router.delete('/:id', (req, res) => {
  knex('classifieds')
  .del()
  .where('id', req.params.id)
  .then(() => {
    res.send('done');
  })
})

module.exports = router;
