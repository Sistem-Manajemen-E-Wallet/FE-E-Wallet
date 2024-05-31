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
        <div className="bg-primary-first mt-10 rounded-full py-10 px-10 flex justify-between items-center w-full">
          <div>
            <p className="font-bold text-white text-3xl mb-2">
              Rp. 20,000,0000
            </p>
            <p className="font-light text-white text-xs">
              Current AltaPay Wallet Balance
            </p>
          </div>
          <div>
            <Link className="bg-white p-4 rounded-full text-2xl" to={"/"}>
              <span className="font-extrabold text-3xl mr-2">+</span> Add Money
              to Wallet
            </Link>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <Carousel />

      {/* Service Menu */}
      <div className="container mt-10">
        <p className="text-2xl font-extrabold ml-5">Service</p>
        <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-3 py-10 gap-y-12">
          <Menu key={1} name="Food Court" source={FoodCourt} navigate="/" />
          <Menu key={1} name="Pay" source={Pay} navigate="/" />
          <Menu key={1} name="Credit & Data" source={PulseData} navigate="/" />
          <Menu key={1} name="BPJS Kesehatan" source={Bpjs} navigate="/" />
          <Menu key={1} name="PDAM" source={Pdam} navigate="/" />
          <Menu key={1} name="Internet" source={Internet} navigate="/" />
          <Menu key={1} name="PLN" source={Pln} navigate="/" />
          <Menu key={1} name="Voucher Game" source={Game} navigate="/" />
          <Menu key={1} name="Cicilan" source={Cicilan} navigate="/" />
          <Menu key={1} name="Pay Insurance" source={Insurance} navigate="/" />
          <Menu key={1} name="TIX ID" source={TixId} navigate="/" />
          <Menu key={1} name="Netflix" source={Netflix} navigate="/" />
        </div>
      </div>
    </section>
  );
};

export default Home;
