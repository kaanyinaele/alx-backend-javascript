const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", () => {
  it("should return the sum of rounded numbers", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle negative numbers correctly", () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    assert.strictEqual(calculateNumber(-1.5, 2.5), 1);
  });

  it("should return the correct sum when dealing with large numbers", () => {
    assert.strictEqual(calculateNumber(123456.7, 7654321.1), 7777778);
  });

  it("should work when both inputs are zero", () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
