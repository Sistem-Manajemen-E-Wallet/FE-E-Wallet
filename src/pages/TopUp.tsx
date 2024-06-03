import { useState } from "react";
import RadioBank from "../components/Radio";
import { numberWithCommas } from "@/utils/hooks/usePrice";
import { Link } from "react-router-dom";

const TopUp = () => {
  const [selectedValue, setSelectedValue] = useState<string>("default");

  return (
    <section className="relative overflow-auto h-screen pt-32">
      <div className="py-6 pb-28 bg-slate-100">
        <div className="container">
          <div className="flex justify-start gap-5 my-6">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#525252"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              />
              <path
                fill="#525252"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              />
            </svg>
            <span className="text-neutral-600">Top Up</span>
          </div>
          <div>
            <p className="text-2xl font-bold mb-5">Select Method</p>
          </div>
          <form className="flex gap-20">
            <div className="grid space-y-2">
              <RadioBank
                id="radio-bank-1"
                name="topup-method"
                value="bank1"
                checked={selectedValue === "bank1"}
                onChange={setSelectedValue}
                label="BCA Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1199px-Bank_Central_Asia.svg.png"
              />
              <RadioBank
                id="radio-bank-2"
                name="topup-method"
                value="bank2"
                checked={selectedValue === "bank2"}
                onChange={setSelectedValue}
                label="BNI Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/300px-BNI_logo.svg.png?20240305030303"
              />
              <RadioBank
                id="radio-bank-3"
                name="topup-method"
                value="bank3"
                checked={selectedValue === "bank3"}
                onChange={setSelectedValue}
                label="BRI Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/189px-BANK_BRI_logo.svg.png?20180118061811"
              />
              <RadioBank
                id="radio-bank-4"
                name="topup-method"
                value="bank4"
                checked={selectedValue === "bank4"}
                onChange={setSelectedValue}
                label="CIMB Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/CIMB_Niaga_logo.svg/1200px-CIMB_Niaga_logo.svg.png"
              />
            </div>
            <div className="flex-1 container bg-white border border-gray-200 rounded-xl p-5 shadow-lg">
              <h2 className="mb-5 font-semibold">Select Nominal</h2>
              <div className="grid grid-cols-4 gap-4 mb-5">
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(30000)}
                </button>
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(50000)}
                </button>
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(100000)}
                </button>
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(200000)}
                </button>
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(300000)}
                </button>
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(400000)}
                </button>
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(500000)}
                </button>
                <button className="p-4 border border-gray-300 rounded cursor-pointer">
                  Rp {numberWithCommas(1000000)}
                </button>
              </div>
              <h2 className="mb-5 font-semibold">Nominal</h2>
              <div className="mb-6">
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Rp."
                />
                <p className="text-xs text-[#737373]">
                  minimal top up Rp10.000
                </p>
              </div>
              <Link to={"/top-up-detail"}>
                <button
                  type="submit"
                  className="text-white bg-[#464BD8] hover:bg-[#464BD8]/80 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Top Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopUp;
