import { ImageFood } from "@/assets/image";
import { Link } from "react-router-dom";
import { LogoDelete, LogoEdit, LogoUser } from "../assets/logo";
import { numberWithCommas } from "../utils/hooks/usePrice";

const Checkout = () => {
  return (
    <section className="relative p-0 overflow-auto h-screen py-40 bg-primary-secound">
      <div className="container">
        <p className="mb-5 text-2xl font-bold">Checkout</p>
        <div className="grid grid-flow-col grid-cols-3 gap-5">
          <img src={ImageFood} alt="food" className="h-52 w-full" />
          <div>
            <p className="text-3xl font-extralight mb-4">Pecel Lele</p>
            <div className="flex gap-2 items-center mb-2">
              <div className="bg-yellow-200 rounded-full w-10 h-10 flex items-center justify-center">
                <img src={LogoUser} alt="user" width={30} height={30} />
              </div>
              <p className="font-extralight">Toko Kelontong</p>
            </div>
            <p className="font-extralight mb-2">
              Category <span className="font-bold">Food Court</span>
            </p>
            <div className="flex gap-3">
              <div className="bg-white rounded-full p-1">
                <img src={LogoEdit} alt="edit" width={30} height={30} />
              </div>
              <div className="bg-white rounded-full p-1">
                <img src={LogoDelete} alt="delete" width={30} height={30} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl shadow-gray-500 w-auto h-auto py-5 px-5">
            <p className="text-xl">Detail Price</p>
            <hr className="h-px border-t-0 bg-black mt-1 mb-2" />
            <div className="flex justify-between mb-1">
              <p>Price</p>
              <p className="font-bold">Rp. 20,000</p>
            </div>
            <div className="flex justify-between mb-1">
              <p>Qty</p>
              <p>
                <span className="font-bold">2 </span>Food(s)
              </p>
            </div>
            <div className="flex justify-between mb-1">
              <p>Total Cost</p>
              <p className="font-bold">Rp. 40,000</p>
            </div>
          </div>
        </div>
        <hr className="h-px border-t-0 bg-black mt-2" />
        <p className="mt-5 mb-2 font-semibold">Note</p>
        <textarea
          className="bg-white w-1/2 rounded-xl h-36 shadow-2xl shadow-gray-500 p-3"
          placeholder="Add Pedes Level 10 ..."
        ></textarea>
      </div>
      <div className="fixed bottom-0 w-full border-gray-200 bg-white shadow-gray-950 rounded-t-2xl">
        <div className="container">
          <div className="flex justify-between items-center py-5 ">
            <div>
              <p className="font-medium">My Balance</p>
              <p className="font-bold">Rp. {numberWithCommas(20000000)}</p>
            </div>
            <Link
              to={"/verify-pin"}
              className="bg-primary-first py-2 px-10 rounded-xl"
            >
              <p className="text-white font-bold text-lg">BUY</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
