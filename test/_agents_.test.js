import superagent from "superagent";

const API_ROOT = "http://localhost:8484/";

const responseBody = res => res.body || res.text;

const requests = {
  get: (url, query) =>
    superagent
      .get(`${API_ROOT}api${url}`)
      .query(query)
      .then(responseBody)
};

const productsAgent = {
  get: productId =>
    productId
      ? requests.get(`/products/${productId}`)
      : requests.get(`/products`)
};

describe("products agent", () => {
  it("get all products from API", async () => {
    expect.assertions(1);
    try {
      const { products } = await productsAgent.get();
      expect(products).toMatchSnapshot();
    } catch (error) {
      throw Error(error);
    }
  }, 20000);
});
