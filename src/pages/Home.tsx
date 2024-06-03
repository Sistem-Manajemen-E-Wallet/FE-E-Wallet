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

const Home = () => {
  return (
    <section className="relative p-0 overflow-auto h-screen py-32">
      {/* Information Wallet */}
      <div className="container">
        <div className="bg-primary-first mt-10 rounded-full py-10 px-10 flex mobile:block justify-between items-center w-full mobile:text-center">
          <div>
            <p className="font-bold text-white text-3xl mb-2 mobile:text-center">
              Rp. 20,000,0000
            </p>
            <p className="font-light text-white text-xs">
              Current AltaPay Wallet Balance
            </p>
          </div>
          <div className="mobile:mt-5">
            <Link
              className="bg-white p-4 rounded-full text-2xl mobile:text-sm"
              to={"/"}
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
          />
          <Menu key={2} name="Pay" source={Pay} navigate="/" />
          <Menu key={3} name="Credit & Data" source={PulseData} navigate="/" />
          <Menu key={4} name="BPJS Kesehatan" source={Bpjs} navigate="/" />
          <Menu key={5} name="PDAM" source={Pdam} navigate="/" />
          <Menu key={6} name="Internet" source={Internet} navigate="/" />
          <Menu key={7} name="PLN" source={Pln} navigate="/" />
          <Menu key={8} name="Voucher Game" source={Game} navigate="/" />
          <Menu key={9} name="Cicilan" source={Cicilan} navigate="/" />
          <Menu key={10} name="Pay Insurance" source={Insurance} navigate="/" />
          <Menu key={11} name="TIX ID" source={TixId} navigate="/" />
          <Menu key={12} name="Netflix" source={Netflix} navigate="/" />
        </div>
      </div>
    </section>
  );
};

export default Home;
