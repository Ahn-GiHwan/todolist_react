export const validation = (str) => {
  if (str === "") return false;
  if (str.match(/\s/g)) return false;
  return true;
};

export default validation;
