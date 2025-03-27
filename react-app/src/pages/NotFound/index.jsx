import { useNavigate } from "react-router";
import Header from "../../components/header";

const NotFound = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div>
        <h1>Not Found - 404</h1>
        <button onClick={onHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
