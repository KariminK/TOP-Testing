import Calculator from "../scripts/calculator";

it("5 + 6 should be 11", () => expect(Calculator.add(5, 6)).toBe(11));
it("5 - 6 should be -1", () => expect(Calculator.subtract(5, 6)).toBe(-1));
it("5 * 6 should be 30", () => expect(Calculator.multiply(5, 6)).toBe(30));
it("5 * -1 should be -5", () => expect(Calculator.multiply(5, -1)).toBe(-5));
it("2 / 2 should be 1", () => expect(Calculator.divide(2, 2)).toBe(1));
it("3 / 4 should be 0.75", () => expect(Calculator.divide(3, 4)).toBe(0.75));

it("2 / 0 should be 'can't divide by 0'", () =>
  expect(Calculator.divide(2, 0)).toBe("can't divide by 0"));

it("x + y should be invalid numbers", () =>
  expect(Calculator.add("x", "y")).toBe("invalid numbers"));
