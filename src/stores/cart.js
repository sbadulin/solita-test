/**
 * Cart store
 *
 * Stores product ids in cart, cart size, removing and adding methods
 */
import { action, observable, computed } from "mobx";

class Cart {
  @observable cartItemIds = [];

  /**
   * Counts items in cart
   *
   * @returns {number} number of items in cart
   */

  @computed
  get cartSize() {
    return this.cartItemIds.length;
  }

  /**
   * Adds product id to cartItemIds
   *
   * @param {number} productId
   * @returns {null}
   */
  @action
  addToCart = productId => {
    this.cartItemIds.push(productId);
  };

  /**
   * Removes product id from cartItemIds
   *
   * @param {number} productId
   * @returns {null}
   */
  @action
  removeFromCart = productId => {
    const index = this.cartItemIds.indexOf(productId);
    this.cartItemIds.splice(index, 1);
  };
}

export default new Cart();
