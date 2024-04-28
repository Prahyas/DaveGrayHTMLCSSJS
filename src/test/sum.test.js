const sum = require("../js/sum");

test("It should add the two numbers and return the sum", () => {
  expect(sum(5, 10)).toBe(15);
});
