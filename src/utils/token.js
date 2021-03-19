export const parseJWT = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};
