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
import TopUpStatus from "@/pages/TopUpStatus";
import Transaction from "../pages/merchant/Transaction";
import Checkout from "../pages/Checkout";
import VerifyPin from "../pages/VerifyPin";
import PaymentStatus from "../pages/PaymentStatus";
import MerchantProfile from "../pages/merchant/Profile";
import ProtectedRoute from "./ProtectedRoute";
import NoPage from "@/pages/NoPage";

const Routes = () => {
  return (
    <Router>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-list" element={<Foodcourt />} />
          <Route path="/product-detail/:id" element={<DetailFood />} />
          <Route path="/history" element={<History />} />
          <Route path="/top-up" element={<TopUp />} />
          <Route path="/top-up-detail" element={<TransactionPending />} />
          <Route path="/top-up-status" element={<TopUpStatus />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/verify-pin" element={<VerifyPin />} />
          <Route path="/payment-detail" element={<PaymentStatus />} />
        </Route>
        <Route path="/merchant" element={<MerchantLayout />}>
          <Route index element={<MerchantHome />} />
          <Route path="/merchant/profile" element={<MerchantProfile />} />
          <Route path="/merchant/products" element={<Product />} />
          <Route path="/merchant/product/create" element={<CreateProduct />} />
          <Route path="/merchant/product/edit/:id" element={<EditProduct />} />
          <Route path="/merchant/transactions" element={<Transaction />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Router>
  );
};

export default Routes;
