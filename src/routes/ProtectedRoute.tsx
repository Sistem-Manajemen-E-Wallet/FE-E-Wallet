import { useToken } from "@/utils/contexts/useToken";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/",
    "/profile",
    "/product-list",
    /^\/product-detail\/\d+$/,
    "/history",
    "/top-up",
    "/top-up-detail",
    "/checkout",
    "/verify-pin",
    "/payment-detail",
    "/merchant",
    "/merchant/products",
    "/merchant/product/create",
    "/merchant/product/edit",
    "/merchant/transactions",
    "/merchant/profile",
    /^\/merchant\/product\/edit\/\d+$/,
  ];

  const userProtected = [
    "/",
    "/profile",
    "/product-list",
    /^\/product-detail\/\d+$/,
    "/history",
    "/top-up",
    "/top-up-detail",
    "/checkout",
    "/verify-pin",
    "/payment-detail",
  ];

  const adminProtected = [
    "/merchant",
    "/merchant/products",
    "/merchant/product/create",
    "/merchant/product/edit",
    "/merchant/transactions",
    "/merchant/profile",
    /^\/merchant\/product\/edit\/\d+$/,
  ];

  const isRouteProtected = (routes: any[], pathname: string) => {
    return routes.some((route) => {
      if (typeof route === "string") {
        return route === pathname;
      } else if (route instanceof RegExp) {
        return route.test(pathname);
      }
      return false;
    });
  };

  const isProtectedByToken = isRouteProtected(protectedByToken, pathname);

  if (authProtected.includes(pathname)) {
    if (token && user.role === "Customer") return <Navigate to="/" />;
    if (token && user.role === "Merchant") return <Navigate to="/merchant" />;
  }

  if (isProtectedByToken) {
    if (!token) return <Navigate to="/login" />;

    if (
      user.role === "Customer" &&
      !isRouteProtected(userProtected, pathname)
    ) {
      return <Navigate to="/" />;
    }

    if (
      user.role === "Merchant" &&
      !isRouteProtected(adminProtected, pathname)
    ) {
      return <Navigate to="/merchant" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
