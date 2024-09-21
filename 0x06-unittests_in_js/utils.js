// utils.js
const Utils = {
  calculateNumber: function (type, a, b) {
    if (type === "SUM") {
      return Math.round(a) + Math.round(b);
    }
    // You can add more operations like SUBTRACT, DIVIDE later if needed
  },
};

module.exports = Utils;
