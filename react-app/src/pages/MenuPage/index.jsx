import { useCallback, useEffect, useMemo, useState } from "react";
import getMeals from "../../services/menuServices/getMeals";
import Notify from "../../components/notification";
import Banner from "../../components/banner";
import { useNavigate } from "react-router";
import Header from "../../components/header";

const MenuPage = () => {
  const navigate = useNavigate();

  const [status, setStaus] = useState("loading");
  const [meals, setMeals] = useState([]);
  const [count, setCount] = useState(0);

  const [showNotification, setNotification] = useState("");

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasMeals = isDone && meals.length !== 0;
  const noMeals = isDone && meals.length === 0;

  const formatedMeals = useMemo(
    () =>
      meals.map((i) => {
        return {
          id: i.id,
          title: i.strMeal,
        };
      }),
    [meals]
  );

  const fetchMeals = useCallback(async () => {
    try {
      const data = await getMeals();
      if (data) {
        setMeals(data);
      }
      setStaus("done");
    } catch (e) {
      setStaus("error");
    }
  }, []);

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

  const onChat = () => {
    navigate("/chat");
  };

  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Header />
      <h1>Recipies Corner</h1>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something Went Wrong</h2>}
      {noMeals && <h2>No Meals Available</h2>}

      {hasMeals &&
        formatedMeals.map((item) => (
          <div key={item.id} onClick={() => showProduct(item.id)}>
            <p>{item.title}</p>
          </div>
        ))}
      <button onClick={onChat}>Talk to Customer Support</button>
      {showNotification && (
        <Notify message={showNotification} closeNotification={onCloseNotify} />
      )}
    </div>
  );
};

export default MenuPage;
