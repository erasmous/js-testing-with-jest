const compute = require('./compute')

test("multiply the sum of subtraction", () => {
    expect(compute(6, -1)).toBe(-6);
});