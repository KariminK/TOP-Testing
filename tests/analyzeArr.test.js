import analyzeArray from "../scripts/analyzeArr";

it("[0,3,6] case", () =>
  expect(analyzeArray([0, 3, 6])).toStrictEqual({
    average: 3,
    min: 0,
    max: 6,
    length: 3,
  }));

it("[0,0] case", () =>
  expect(analyzeArray([0, 0])).toStrictEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 2,
  }));

it("[0,x,y] case", () =>
  expect(analyzeArray([0, "x", "y"])).toStrictEqual(
    "array doesn't contains numbers only"
  ));

it("[] case", () => expect(analyzeArray([])).toStrictEqual("array is empty"));

it("43 case", () => expect(analyzeArray(43)).toStrictEqual("it is not array"));
