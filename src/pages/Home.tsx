import { userWallet } from "@/utils/api/wallet";
import { numberWithCommas } from "@/utils/hooks/usePrice";
import { atom, useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Bpjs,
  Cicilan,
  FoodCourt,
  Game,
  Insurance,
  Internet,
  Netflix,
  Pay,
  Pdam,
  Pln,
  PulseData,
  TixId,
} from "../assets/logo";
import { Carousel, Menu } from "../components";

const walletAtom = atom(0);
const loadingAtom = atom(true);

const Home = () => {
  const [wallets, setWallets] = useAtom(walletAtom);
  const [loading, isLoading] = useAtom(loadingAtom);

  // Call API Wallet
  const getWallet = useCallback(async () => {
    isLoading(true);
    const response = await userWallet();
    if (response.statusCode == 200) {
      isLoading(false);
      setWallets(response.data.data.Balance);
    }
  }, []);

  useEffect(() => {
    getWallet();
  }, [getWallet]);

  return (
    <section className="relative p-0 overflow-auto h-screen py-32 mobile:py-20">
      {/* Information Wallet */}
      <div className="container">
        <div className="bg-primary-first mt-10 rounded-full py-10 px-10 flex mobile:block justify-between items-center w-full mobile:text-center">
          <div>
            <p className="font-bold text-white text-3xl mb-2 mobile:text-center">
              {loading ? (
                <div className="h-10 bg-slate-300 rounded-xl w-full mx-auto animate-pulse"></div>
              ) : (
                `Rp ` + numberWithCommas(wallets)
              )}
            </p>
            <p className="font-light text-white text-xs">
              Current AltaPay Wallet Balance
            </p>
          </div>
          <div className="mobile:mt-5">
            <Link
              className="bg-white p-4 rounded-full text-2xl mobile:text-sm"
              to={"/top-up"}
            >
              <span className="font-extrabold text-3xl mobile:text-sm mr-2">
                +
              </span>{" "}
              Add Money to Wallet
            </Link>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <Carousel />

      {/* Service Menu */}
      <div className="container mt-10">
        <p className="text-2xl font-extrabold ml-5">Service</p>
        <div
          className="grid grid-flow-row auto-rows-max grid-cols-6 gap-3 py-10 gap-y-12 mobile:grid-cols-2 tablet:grid-cols-3
        "
        >
          <Menu
            key={1}
            name="Food Court"
            source={FoodCourt}
            navigate="/product-list"
            isMaintenance={false}
          />
          <Menu
            key={2}
            name="Pay"
            source={Pay}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={3}
            name="Credit & Data"
            source={PulseData}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={4}
            name="BPJS Kesehatan"
            source={Bpjs}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={5}
            name="PDAM"
            source={Pdam}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={6}
            name="Internet"
            source={Internet}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={7}
            name="PLN"
            source={Pln}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={8}
            name="Voucher Game"
            source={Game}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={9}
            name="Cicilan"
            source={Cicilan}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={10}
            name="Pay Insurance"
            source={Insurance}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={11}
            name="TIX ID"
            source={TixId}
            navigate="/"
            isMaintenance={true}
          />
          <Menu
            key={12}
            name="Netflix"
            source={Netflix}
            navigate="/"
            isMaintenance={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
