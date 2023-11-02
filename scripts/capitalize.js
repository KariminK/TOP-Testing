const capitalize = (string) => {
  let text = string;
  if (typeof text !== "string") text = text.toString();
  return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
};
export default capitalize;
