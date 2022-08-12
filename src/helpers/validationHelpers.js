export const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
};
export const hasMixed = (value) => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
};
export const hasSpecial = (value) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};
export const hasValidLength = (value) => {
  if (value.length < 8) return false;
  else return true;
};

export const validatePassword = (value) => {
  if (!hasValidLength(value)) return false;
  if (!hasNumber(value)) return false;
  if (!hasMixed(value)) return false;
  if (!hasSpecial(value)) return false;
  return true;
};

export const validateEmail = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
};
