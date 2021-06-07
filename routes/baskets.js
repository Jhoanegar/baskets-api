var express = require('express');
const { findAllBaskets, createBasket } = require('../models/baskets')

var router = express.Router();

router.get('/', function(req, res, next) {
  return res.json(findAllBaskets());
});

router.post('/', function(req, res, next) {
  const newBasket = createBasket();

  return res.json(newBasket);
});

module.exports = router;
