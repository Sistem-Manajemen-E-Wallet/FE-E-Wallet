import { LogoSuccess } from "../assets/logo";

const PaymentStatus = () => {
  return (
    <section className="relative p-0 h-screen py-40 bg-green-500">
      <div className="container text-center">
        <div className="flex justify-center items-center mb-5">
          <img src={LogoSuccess} width={250} height={250} />
        </div>
        <p className="mb-5 text-2xl font-semibold text-white">
          Success Payment
        </p>
        <p className="mb-5 text-xl font-medium text-white">Total Cost</p>
        <p className="mb-16 text-lg font-bold text-white">Rp. 40,000</p>
        <p className="font-light text-sm text-white">
          Your current balance is Rp. 19.060.000{" "}
        </p>
      </div>
    </section>
  );
};

export default PaymentStatus;
