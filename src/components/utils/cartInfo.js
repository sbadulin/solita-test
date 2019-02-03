const countSameItemsInCart = ids =>
  ids.reduce((obj, itemId) => {
    obj[itemId] = (obj[itemId] || 0) + 1;
    return obj;
  }, {});

const getCartItems = (ids, products) => {
  const sameItemsCount = countSameItemsInCart(ids);
  return Object.entries(sameItemsCount).reduce((cart, [id, count]) => {
    const product = products[id];
    cart.push({ count, ...product });
    return cart;
  }, []);
};

const getTotal = cartItems =>
  cartItems.reduce((sum, item) => {
    sum += item.price * item.count;
    return sum;
  }, 0);

export const cartInfo = (ids, products) => {
  const items = getCartItems(ids, products);
  const total = getTotal(items);
  return { items, total };
};
