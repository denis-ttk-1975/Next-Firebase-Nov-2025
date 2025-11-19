export const searchFilter = (goods, value) => {
  const filteredGoods = goods.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));

  return filteredGoods;
};

export const categoryFilter = (goods, value) => {
  console.log('value: ', value);
  console.log('goods: ', goods);
  const filteredGoods = goods.filter((item) => item.category === value);

  return filteredGoods;
};

export const saleFilter = (goods) => {
  const filteredGoods = goods.filter((item) => item.sale);

  return filteredGoods;
};

export const priceFilter = (goods, min, max) => {
  const filteredGoods = goods.filter((item) => item.price <= max && item.price >= min);

  return filteredGoods;
};
