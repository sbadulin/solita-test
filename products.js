/**
 * Mock API served as Express middleware
 */
module.exports = {
  products: [
    {
      id: 1,
      name: "Circle",
      description: "Perfect choice when you don’t need any corners.",
      price: 999
    },
    {
      id: 2,
      name: "Rectangle",
      description: "For once, it’s a great idea to think inside the box.",
      price: 899
    },
    {
      id: 3,
      name: "Triangle",
      description: "A true classic with three elegant corners.",
      price: 1009
    }
  ]
};
