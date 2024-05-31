import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative p-0 overflow-auto h-screen py-32">
      <div className="container">
        <div className="bg-primary-first mt-10 rounded-full py-10 px-10 flex justify-between items-center w-full">
          <div>
            <p>Rp. 20,000,0000</p>
            <p>Current AltaPay Wallet Balance</p>
          </div>
          <div>
            <Link className="bg-white p-4 rounded-full" to={"/"}>
              + Add Money to Wallet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
