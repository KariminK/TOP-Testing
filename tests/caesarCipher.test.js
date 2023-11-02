import caesarCipher from "../scripts/caesarCipher";
it("abc in shift 3 should be def", () =>
  expect(caesarCipher("abc", 3)).toBe("def"));
it("hey in shift 3 should be khb", () =>
  expect(caesarCipher("hey", 3)).toBe("khb"));
it("abc in shift 0 should be abc", () =>
  expect(caesarCipher("abc", 0)).toBe("abc"));
it("123 in shift 3 should be 456", () =>
  expect(caesarCipher("123", 3)).toBe("456"));
it("a1b2c3 in shift 3 should be d4e5f6", () =>
  expect(caesarCipher("a1b2c3", 3)).toBe("d4e5f6"));
it("#$% in shift 3 should be &'(", () =>
  expect(caesarCipher("#$%", 3)).toBe("&'("));
