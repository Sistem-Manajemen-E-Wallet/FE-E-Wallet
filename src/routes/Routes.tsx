import { Route, Routes as Router } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Profile from "../pages/Profile";
import Foodcourt from "../pages/Foodcourt";
import DetailFood from "../pages/DetailFood";
import MerchantLayout from "../pages/MerchantLayout";
import MerchantHome from "../pages/merchant/Home";
import Product from "../pages/merchant/Product";

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
    </Router>
  );
};

export default Routes;
