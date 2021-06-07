const uuid = require('uuid').v4;

let baskets = [];

const createBasket = () => {
  const newBasket = { id: uuid() };
  baskets.push(newBasket);

  return newBasket;
}

const clearBaskets = () => {
  baskets = [];
}

const findAllBaskets = () => {
  return baskets;
}

module.exports = {
  createBasket,
  clearBaskets,
  findAllBaskets,
}