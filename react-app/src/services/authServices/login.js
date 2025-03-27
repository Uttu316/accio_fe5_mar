import { api } from "..";

export const login = async (data) => {
  const res = await api({
    endpoint: "users/login",
    method: "POST",
    data,
  });

  if (res && res.data) {
    const { accessToken } = res.data;
    localStorage.setItem("token", accessToken);
  }
};
