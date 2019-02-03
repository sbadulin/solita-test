/**
 * Products store
 *
 * Gets products from a server
 * Stores gotten products in registry
 */
import { action, flow, observable } from "mobx";
import { normalize } from "normalizr";
import { productsAgent } from "../agents";
import { updateItemsInRegistry } from "./helpers/registry";
import { productSchema } from "../schemas";

export class Products {
  @observable productLoading = false;

  @observable registry = {};

  /**
   * Gets products from a server
   *
   * @async
   * @param {null} no params
   * @returns {Promise<Array<Item>>} promise with array of products
   */
  @action
  getProducts = flow(function* getProducts() {
    try {
      const { products } = yield productsAgent.get();
      const {
        entities: { products: normalizedProducts }
      } = normalize(products, [productSchema]);
      this.updateProductsInRegistry(normalizedProducts);
      return products;
    } catch (err) {
      throw err;
    } finally {
      this.productLoading = false;
    }
  });

  @action
  updateProductsInRegistry(products) {
    return updateItemsInRegistry(products, this.registry);
  }
}

export default new Products();
