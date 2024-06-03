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
import History from "../pages/History";
import CreateProduct from "../pages/merchant/CreateProduct";
import EditProduct from "../pages/merchant/EditProduct";
import TopUp from "../pages/TopUp";
import TransactionPending from "../pages/TransactionPending";
import Transaction from "../pages/merchant/Transaction";
import Checkout from "../pages/Checkout";
import VerifyPin from "../pages/VerifyPin";
import PaymentStatus from "../pages/PaymentStatus";
import MerchantProfile from "../pages/merchant/Profile";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-list" element={<Foodcourt />} />
        <Route path="/product-detail" element={<DetailFood />} />
        <Route path="/history" element={<History />} />
        <Route path="/top-up" element={<TopUp />} />
        <Route path="/top-up-detail" element={<TransactionPending />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/verify-pin" element={<VerifyPin />} />
        <Route path="/payment-detail" element={<PaymentStatus />} />
      </Route>
      <Route path="/merchant" element={<MerchantLayout />}>
        <Route index element={<MerchantHome />} />
        <Route path="/merchant/profile" element={<MerchantProfile />} />
        <Route path="/merchant/products" element={<Product />} />
        <Route path="/merchant/product/create" element={<CreateProduct />} />
        <Route path="/merchant/product/edit" element={<EditProduct />} />
        <Route path="/merchant/transactions" element={<Transaction />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Router>
  );
};

export default Routes;
