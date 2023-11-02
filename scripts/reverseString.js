const reverseString = (string) => {
  let text = typeof string !== "string" ? string.toString() : string;
  let charArr = text.split("");
  return charArr.reverse().join("");
};
export default reverseString;
