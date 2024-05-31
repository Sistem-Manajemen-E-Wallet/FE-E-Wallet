import { Outlet } from "react-router-dom";
import Footer from "../templates/Footer";
import Header from "../templates/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
