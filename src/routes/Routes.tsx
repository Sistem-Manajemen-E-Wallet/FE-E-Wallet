import { Route, Routes as Router } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Profile from "../pages/Profile";
import Foodcourt from "../pages/Foodcourt";
import DetailFood from "../pages/DetailFood";
import MerchantLayout from "../pages/MerchantLayout";
import MerchantHome from "../pages/merchant/Home";
import Product from "../pages/merchant/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-list" element={<Foodcourt />} />
        <Route path="/product-detail" element={<DetailFood />} />
      </Route>
      <Route path="/merchant" element={<MerchantLayout />}>
        <Route index element={<MerchantHome />} />
        <Route path="/merchant/products" element={<Product />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Router>
  );
};

export default Routes;
