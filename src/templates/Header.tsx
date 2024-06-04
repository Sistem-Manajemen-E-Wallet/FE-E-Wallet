import { userProfile } from "@/utils/api/users";
import { atom, useAtom } from "jotai";
import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoHistory, LogoHome, LogoLogout } from "../assets/logo";
import Logo from "../assets/logo/logo.svg";

const isOpenAtom = atom(false);
const userAtom = atom({
  name: "",
  email: "",
  role: "",
  profile_picture: "",
});

const Header = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const token = Cookies.get("token");
  const [users, setUsers] = useAtom(userAtom);

  const getProfiles = useCallback(async () => {
    const response = await userProfile();
    if (response.statusCode == 200) {
      setUsers(response.data.data);
    } else {
      Cookies.remove("token");
    }
  }, []);

  useEffect(() => {
    if (token) {
      getProfiles();
    }
  }, []);

  return (
    <header className="fixed top-0 z-10 border-gray-600 bg-white w-screen rounded-br-3xl rounded-bl-3xl shadow-lg shadow-gray-500">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src={Logo} alt="logo" height={125} width={125} />
          </Link>
          <p
            className="text-xl mr-5 select-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Hi, <span className="font-bold">{users.name}</span>
            {isOpen && (
              <div
                className={`z-10 absolute mt-1 ${
                  isOpen ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-xl shadow-stone-950 w-auto`}
              >
                <ul className="">
                  <NavLink
                    to={"/"}
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 bg-secondary-first flex justify-center items-center rounded-full mr-2">
                      <img src={LogoHome} alt="logohome" />
                    </div>
                    <p>Home</p>
                  </NavLink>
                  <NavLink
                    to={"/history"}
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 bg-secondary-first flex justify-center items-center rounded-full mr-2">
                      <img src={LogoHistory} alt="logohistory" />
                    </div>
                    <p>History</p>
                  </NavLink>
                  <NavLink
                    to={"/profile"}
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 bg-secondary-first flex justify-center items-center rounded-full mr-2">
                      <img src={LogoHistory} alt="logohistory" />
                    </div>
                    <p>My Profile</p>
                  </NavLink>
                  <NavLink
                    to={"/"}
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 bg-secondary-first flex justify-center items-center rounded-full mr-2">
                      <img src={LogoLogout} alt="logologout" />
                    </div>
                    <p>Logout</p>
                  </NavLink>
                </ul>
              </div>
            )}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
