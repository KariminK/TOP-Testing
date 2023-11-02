const analyzeArray = (array) => {
  if (!Array.isArray(array)) return "it is not array";
  if (array.length === 0) return "array is empty";
  let sumOfArr = array.reduce((prev, cur) => prev + cur, 0);
  if (isNaN(sumOfArr)) return "array doesn't contains numbers only";
  return {
    average: sumOfArr / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};
export default analyzeArray;
