import { api } from "..";

const getMeals = async () => {
  const res = await api({ endpoint: "public/meals" });
  if (res && res.data && res.data.data) {
    return res.data.data;
  }
  return null;
};
export default getMeals;
