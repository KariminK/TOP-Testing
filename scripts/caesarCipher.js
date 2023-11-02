const caesarCipher = (string, shift) => {
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "w",
    "v",
    "x",
    "y",
    "z",
  ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChars = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  const charArr = string.split("");
  const shiftedString = charArr.map((char) => {
    if (numbers.includes(char)) return shiftChar(numbers, char, shift);
    else if (chars.includes(char)) return shiftChar(chars, char, shift);
    else return shiftChar(specialChars, char, shift);
  });
  return shiftedString.join("");
};
const shiftChar = (arrayOfChars, char, shift) => {
  let charIndex = arrayOfChars.findIndex((num) => num === char);
  if (charIndex + shift > arrayOfChars.length) {
    let difference = charIndex + shift - arrayOfChars.length;
    return arrayOfChars[difference];
  }
  return arrayOfChars[charIndex + shift];
};
export default caesarCipher;
