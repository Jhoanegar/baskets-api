const uuid = require('uuid').v4;

const baskets = [];

const createBasket = () => {
  const newBasket = { id: uuid() };
  baskets.push(newBasket);

  return newBasket;
}

const findAllBaskets = () => {
  return baskets;
}

module.exports = {
  createBasket,
  findAllBaskets,
}