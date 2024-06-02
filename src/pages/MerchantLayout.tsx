import { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/style/merchant.css";
import {
  DashboardIcon,
  LogoutIcon,
  ProductIcon,
  ProfileIcon,
  TransactionIcon,
  WalletIcon,
} from "../components/icons/Index";

import Logo from "../assets/logo/logo.svg";
import profilePicture from "../assets/images.png";

const MerchantLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-80 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0 lg:translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-lg shadow-gray-200">
          <div className="flex flex-col items-center justify-center">
            <Link to="/merchant" className="flex flex-col items-center my-5">
              <img src={Logo} alt="logo" height={60} width={60} />
              <span className="self-center text-lg font-medium whitespace-nowrap text-neutral-600">
                Altapay | Merchant
              </span>
            </Link>
          </div>

          <ul className="space-y-2 font-medium my-5">
            <li>
              <Link
                to="/merchant"
                className="flex items-center p-2 bg-[#464BD8] text-white rounded-menu hover:bg-[#464BD8]/80"
              >
                <DashboardIcon />

                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-neutral-600 rounded-menu hover:bg-gray-100"
              >
                <ProductIcon />
                <span className="ms-3">My products</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-neutral-600 rounded-menu hover:bg-gray-100"
              >
                <TransactionIcon />
                <span className="ms-3">My transactions</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-neutral-600 rounded-menu hover:bg-gray-100"
              >
                <ProfileIcon />
                <span className="ms-3">My profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-neutral-600 rounded-menu hover:bg-gray-100"
              >
                <LogoutIcon />

                <span className="ms-3">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="lg:ml-80 bg-gray-50 relative min-h-screen">
        <button
          onClick={toggleSidebar}
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex lg:hidden items-center p-2 mt-4 ms-3 text-sm bg-primary-first hover:bg-primary-first/80 text-white rounded-menu"
        >
          Open menu
        </button>
        <div className="lg:px-12 px-3 lg:py-10 py-4">
          <nav className="px-4 flex justify-between bg-white shadow border rounded">
            <div className="flex items-center gap-4">
              <WalletIcon />
              <span className="font-semibold text-lg text-neutral-600">
                Rp. 500.000
              </span>
            </div>

            <div className="flex items-center">
              <img
                className="w-10 h-10 me-4 rounded-full"
                src={profilePicture}
                alt=""
              />

              <div className="font-medium my-6 text-neutral-600">
                <p>Pecel lele berkah</p>
              </div>
            </div>
          </nav>
          <Outlet />
        </div>

        <footer className="lg:px-12 px-3 py-4 flex justify-between bg-gray-50 shadow-lg rounded-md absolute bottom-0 left-0 right-0 z-10">
          <span className="text-neutral-400">© 2024 Copyright: Altapay</span>
        </footer>
      </div>
    </div>
  );
};

export default MerchantLayout;
