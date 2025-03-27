import { api } from "..";

export const signup = async (data) => {
  const res = await api({
    endpoint: "users/register",
    method: "POST",
    data: {
      ...data,
      role: "ADMIN",
    },
  });
  console.log(res);
};
