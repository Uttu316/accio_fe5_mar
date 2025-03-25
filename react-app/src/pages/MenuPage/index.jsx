import { useEffect, useState } from "react";
import getMeals from "../../services/menuServices/getMeals";
import Notify from "../../components/notification";

const MenuPage = () => {
  const [status, setStaus] = useState("loading");
  const [meals, setMeals] = useState([]);

  const [showNotification, setNotification] = useState("");

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasMeals = isDone && meals.length !== 0;
  const noMeals = isDone && meals.length === 0;

  const fetchMeals = async () => {
    try {
      const data = await getMeals();
      if (data) {
        setMeals(data);
      }
      setStaus("done");
    } catch (e) {
      setStaus("error");
    }
  };

  const onCloseNotify = () => {
    setNotification("");
  };
  useEffect(() => {
    fetchMeals();

    return () => {
      //cleanup function
      console.log("Unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("status changed");
    setNotification(status);
  }, [status]);

  return (
    <div>
      <h1>Recipies Corner</h1>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something Went Wrong</h2>}
      {noMeals && <h2>No Meals Available</h2>}
      {hasMeals &&
        meals.map((item) => (
          <div key={item.id}>
            <p>{item.strMeal}</p>
          </div>
        ))}
      {showNotification && (
        <Notify message={showNotification} closeNotification={onCloseNotify} />
      )}
    </div>
  );
};

export default MenuPage;
