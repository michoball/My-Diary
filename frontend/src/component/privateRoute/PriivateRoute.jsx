import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("user"));

  if (!currentUser) {
    alert("Log in First");
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
