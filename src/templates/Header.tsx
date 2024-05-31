import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 border-gray-600 bg-white w-screen rounded-br-3xl rounded-bl-3xl shadow-lg shadow-gray-500">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src={Logo} alt="logo" height={125} width={125} />
          </Link>
          <p className="text-xl">
            Hi, <span className="font-bold">Mikhael</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
