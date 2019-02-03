import { toJS } from "mobx";

import { Products } from "../src/stores/products";

let testInstance = null;

describe("products store", () => {
  beforeEach(() => {
    testInstance = new Products();
  });

  it("searches for products", async () => {
    const products = await testInstance.getProducts();
    expect(toJS(testInstance.registry)).toMatchSnapshot();
    expect(products.length).toBe(3);
  });

  it("searches for product with id 1", async () => {
    await testInstance.getProducts(1);
    expect(toJS(testInstance.registry[1])).toMatchSnapshot();
  });
});
