const sum = require("./sum");

test("adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("console log helper", () => {
  expect(helper()).toBe("Helper");
});
