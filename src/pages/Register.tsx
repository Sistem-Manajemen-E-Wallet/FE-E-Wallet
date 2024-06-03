import { Link } from "react-router-dom";
import { useState } from "react";
import { LogoIcon } from "@/assets/logo";
import { ImageCustomer, ImageStore } from "@/assets/image";

const Register = () => {
  const [role, setRole] = useState<string>("");

  return (
    <section className="flex flex-col w-full h-screen justify-center bg-[#464BD8]">
      <div className="flex flex-col justify-center items-center container lg:px-96 md:px-64 sm:px-32 xs:px-24">
        <div className="py-3 px-20 w-full bg-[#F3F6FF] rounded-xl">
          <div className="flex justify-center">
            <img src={LogoIcon} className="flex justify-center mb-2" />
          </div>
          <form className="flex flex-col gap-3">
            <div className="space-y-3">
              <div className="mb-2">
                <div className="flex flex-col space-y-1">
                  <div className="flex flex-row gap-3 lg:gap-10">
                    <div
                      className={`flex-1 border-2  rounded-xl hover:border-[#464BD8] ${
                        role === "customer"
                          ? "border-[#464BD8]"
                          : "border-gray-300"
                      }`}
                      onClick={() => setRole("customer")}
                    >
                      <div className="flex flex-col space-x-3 space-y-0 p-3">
                        <div className="flex flex-col items-center justify-center font-bold text-lg lg:text-xl">
                          <img
                            src={ImageCustomer}
                            alt="Customer"
                            className="w-16 pb-3"
                          />
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex-1 border-2 rounded-xl  hover:border-[#464BD8] ${
                        role === "merchant"
                          ? "border-[#464BD8]"
                          : "border-gray-300"
                      }`}
                      onClick={() => setRole("merchant")}
                    >
                      <div className="flex flex-col space-x-3 space-y-0 p-3">
                        <div className="flex flex-col items-center justify-center font-bold text-lg lg:text-xl">
                          <img
                            src={ImageStore}
                            alt="Merchant"
                            className="w-16 pb-3"
                          />
                          <p>Merchant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="fullname"
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email"
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="phone number"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="pin"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="confirm pin"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#464BD8] hover:bg-[#464BD8]/80 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Sign Up
            </button>
          </form>
          <p className="text-end">
            <Link
              to={"/login"}
              className="text-sm text-[#737373] hover:text-black"
            >
              Already Have an Account?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
