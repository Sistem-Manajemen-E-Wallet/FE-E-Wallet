import { Route, Routes as Router } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Foodcourt from "../pages/Foodcourt";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product-list" element={<Foodcourt />}/>
      </Route>
    </Router>
  );
};

export default Routes;
