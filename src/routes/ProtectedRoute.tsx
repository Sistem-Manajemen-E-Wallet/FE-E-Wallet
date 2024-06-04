import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const token = Cookies.get("token");

  const authProtected = ["/login", "/register"];
  const protectedByToken = ["/", "/profile"];
  // const adminProtected = ["/merchant"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={"/"} />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
