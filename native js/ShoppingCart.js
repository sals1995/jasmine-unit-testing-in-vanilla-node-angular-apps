/**
 * Represents an online shopping cart.
 */
class ShoppingCart {
  /**
   * Initialize a new cart with an owner and empty items list.
   * @param {string} owner - The name of the cart owner.
   */
  constructor(owner) {
    this.owner = owner;
    this.items = [];
  }

  /**
   * Adds a new item to the cart.
   * @param {{ name: string, price: number }} item - The product to add.
   */
  addItem(item) {
    this.items.push(item);
  }

  /**
   * Calculates the total price of all items in the cart.
   * @returns {number} - The total amount.
   */
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  /**
   * Checks out and processes payment.
   * @param {{processPayment:function}} paymentService - The external payment service.
   * @param {function} paymentService.processPayment - processes the given payment amount by provide by an external payment service
   * (e.g., PayPal, Stripe, etc.) and handles the actual payment logic.
   * @returns {string} - Confirmation message.
   */
  checkout(paymentService) {
    const total = this.getTotal();
    if (total === 0) return "Cart is empty!";

    paymentService.processPayment(total);
    return `Payment of $${total} processed.`;
  }
}
