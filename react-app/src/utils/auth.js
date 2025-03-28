export const isLoggedin = () => {
  return Boolean(localStorage.getItem("token"));
};

export const logout = () => {
  localStorage.removeItem("token");
};
