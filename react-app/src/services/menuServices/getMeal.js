import { api } from "..";

const getMeal = async (productId) => {
  const res = await api({ endpoint: `public/meals/${productId}` });
  if (res && res.data) {
    const meal = res.data;
    return {
      title: meal.strMeal,
      area: meal.strArea,
      category: meal.strCategory,
      description: meal.strInstructions,
      picture: meal.strMealThumb,
    };
  }
};
export default getMeal;
