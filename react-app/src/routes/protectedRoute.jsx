import { isLoggedin } from "../utils/auth";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isLogIn = isLoggedin();

  if (!isLogIn) {
    return <Outlet />;
  }
  return <Navigate to="/" replace={true} />;
};

export default ProtectedRoute;
