import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";

const Login = () => {
  return (
    <section className="flex flex-col w-full h-screen justify-center bg-[#464BD8]">
      <div className="flex flex-col justify-center items-center container lg:px-96 md:px-64 sm:px-32 xs:px-24">
        <div className="p-20 w-full bg-[#F3F6FF] rounded-xl">
          <div className="flex justify-center">
            <img src={Logo} className="flex justify-center mb-5" />
          </div>
          <form className="flex flex-col gap-3">
            <div className="mb-6">
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="phone number"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="pin"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#464BD8] hover:bg-[#464BD8]/80 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Sign In
            </button>
          </form>
          <p className="text-end">
            <Link to={""} className="text-sm text-[#737373] hover:text-black">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
