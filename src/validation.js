export const validation = (str) => {
  if (str === "") return false;
  if (str.replace(/ /g, "") === "") return false;
  return true;
};

export default validation;
