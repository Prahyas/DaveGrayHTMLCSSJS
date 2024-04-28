const cloneArray = require("../js/cloneArray");

test("Should shallow copy an array", () => {
  expect(cloneArray([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, [4, 5]]);
});
