const Calculator = {
  add(a, b) {
    if (isNaN(a) || isNaN(b)) return "invalid numbers";
    return a + b;
  },
  subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return "invalid numbers";
    return a - b;
  },
  divide(a, b) {
    if (isNaN(a) || isNaN(b)) return "invalid numbers";
    if (b === 0) return "can't divide by 0";
    return a / b;
  },
  multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return "invalid numbers";
    return a * b;
  },
};
export default Calculator;
