import requests from "./helpers/requests";

export default {
  get: productId =>
    productId
      ? requests.get(`/products/${productId}`)
      : requests.get(`/products`)
};
