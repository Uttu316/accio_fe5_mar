import { isLoggedin } from "../utils/auth";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isLogIn = isLoggedin();

  if (isLogIn) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
