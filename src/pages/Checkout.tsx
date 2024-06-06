import { userWallet } from "@/utils/api/wallet";
import { atom, useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LogoDelete, LogoEdit, LogoUser } from "../assets/logo";
import { numberWithCommas } from "../utils/hooks/usePrice";

const walletAtom = atom(0);
const noteAtom = atom("");
const numberOrder = atom(0);

const Checkout = () => {
  const location = useLocation();
  const state = location.state;
  const [notes, setNotes] = useAtom(noteAtom);
  const [number, setNumber] = useAtom(numberOrder);
  const [wallets, setWallets] = useAtom(walletAtom);
  const navigate = useNavigate();

  if (!state) {
    return <Navigate to={"/"} replace />;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const target = e.target;
    if (target.name === "note") {
      setNotes(target.value);
    }

    if (target.name === "numberorder") {
      setNumber(Number(target.value));
    }
  };

  // Call API Wallet
  const getWallet = useCallback(async () => {
    const response = await userWallet();
    if (response.statusCode == 200) {
      setWallets(response.data.data.Balance);
    }
  }, []);

  useEffect(() => {
    getWallet();
  }, [getWallet]);

  const handleCheckout = () => {
    if (wallets >= state.dataCheckout.price) {
      const dataTrx = {
        order_id: number,
        product_id: state.dataCheckout.product_id,
        quantity: state.dataCheckout.qty,
        additional: notes,
      };
      navigate("/verify-pin", {
        state: {
          dataTrx,
        },
      });
    } else {
      alert("Your wallet balance is insufficient, please top up");
    }
  };
  return (
    <section className="relative p-0 overflow-auto h-screen py-40 bg-primary-secound">
      <div className="container">
        <p className="mb-5 text-2xl font-bold">Checkout</p>
        <div className="grid grid-flow-col grid-cols-3 gap-5 mobile:block">
          <img
            src={state.dataCheckout.product_images}
            alt="food"
            className="h-52 w-full"
          />
          <div>
            <p className="text-3xl font-extralight mb-4">
              {state.dataCheckout.product_name}
            </p>
            <div className="flex gap-2 items-center mb-2">
              <div className="bg-yellow-200 rounded-full w-10 h-10 flex items-center justify-center">
                <img src={LogoUser} alt="user" width={30} height={30} />
              </div>
              <p className="font-extralight">
                {state.dataCheckout.merchant_name}
              </p>
            </div>
            <p className="font-extralight mb-2">
              Category{" "}
              <span className="font-bold">
                {state.dataCheckout.category_food}
              </span>
            </p>
            <div className="flex gap-3 mobile:mb-3">
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
              <p className="font-bold">
                Rp. {numberWithCommas(state.dataCheckout.price)}
              </p>
            </div>
            <div className="flex justify-between mb-1">
              <p>Qty</p>
              <p>
                <span className="font-bold"> {state.dataCheckout.qty} </span>
                Food(s)
              </p>
            </div>
            <div className="flex justify-between mb-1">
              <p>Total Cost</p>
              <p className="font-bold">
                Rp. {numberWithCommas(state.dataCheckout.total_cost)}
              </p>
            </div>
          </div>
        </div>
        <hr className="h-px border-t-0 bg-black mt-2" />
        <div className="flex justify-between gap-10">
          <div className="w-screen">
            <p className="mt-5 mb-2 font-semibold">Note</p>
            <textarea
              name="note"
              value={notes}
              onChange={handleChange}
              className="bg-white w-full mobile:w-full rounded-xl h-36 shadow-2xl shadow-gray-500 p-3"
              placeholder="Add Pedes Level 10 ..."
            ></textarea>
          </div>
          <div className="w-screen">
            <p className="mt-5 mb-2 font-semibold">Number Order</p>
            <input
              type="number"
              name="numberorder"
              value={number}
              onChange={handleChange}
              className="bg-white w-full mobile:w-full rounded-xl shadow-2xl shadow-gray-500 p-3"
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full border-gray-200 bg-white shadow-gray-950 rounded-t-2xl">
        <div className="container">
          <div className="flex justify-between items-center py-5 ">
            <div>
              <p className="font-medium">My Balance</p>
              <p className="font-bold">Rp. {numberWithCommas(wallets)}</p>
            </div>
            <button
              // to={"/verify-pin"}
              onClick={() => handleCheckout()}
              className="bg-primary-first py-2 px-10 rounded-xl"
            >
              <p className="text-white font-bold text-lg">BUY</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
