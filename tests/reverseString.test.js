import reverseString from "../scripts/reverseString";
it("ABC should be CBA", () => expect(reverseString("ABC")).toBe("CBA"));

it("4356 (string) should be 6534", () =>
  expect(reverseString("4356")).toBe("6534"));

it("4356 (int) should be 6534", () => expect(reverseString(4356)).toBe("6534"));

it("true (bool) should be eurt", () =>
  expect(reverseString(true)).toBe("eurt"));
