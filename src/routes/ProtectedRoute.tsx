import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const token = Cookies.get("token");

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/",
    "/profile",
    "/product-list",
    /^\/product-detail\/\d+$/,
  ];
  // const adminProtected = ["/merchant"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={"/"} />;
  }

  const isProtectedByToken = protectedByToken.some((route) =>
    route instanceof RegExp ? route.test(pathname) : route === pathname
  );

  if (isProtectedByToken) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
