import capitalize from "../scripts/capitalize";
it("lorem ipsum should be Lorem ipsum", () =>
  expect(capitalize("lorem ipsum")).toBe("Lorem ipsum"));

it("4234 should be 4234", () => expect(capitalize(4234)).toBe("4234"));

it("true (string) should be True", () =>
  expect(capitalize("true")).toBe("True"));

it("true (bool) should be True", () => expect(capitalize(true)).toBe("True"));
