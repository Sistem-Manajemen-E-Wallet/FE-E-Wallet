import { Route, Routes as Router } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Profile from "../pages/Profile";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Router>
  );
};

export default Routes;
