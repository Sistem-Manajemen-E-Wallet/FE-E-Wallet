import { LogoSuccess } from "@/assets/logo";
import { numberWithCommas } from "@/utils/hooks/usePrice";


const TopUpStatus = () => {
    return (
        <section className="relative p-0 h-screen py-40 bg-green-500">
          <div className="container text-center">
            <div className="flex justify-center items-center mb-5">
              <img src={LogoSuccess} width={250} height={250} />
            </div>
            <p className="mb-5 text-2xl font-semibold text-white">
              Top Up Success
            </p>
            <p className="mb-5 text-xl font-medium text-white">Total</p>
            <p className="mb-16 text-lg font-bold text-white">
              Rp. {numberWithCommas(200000)}
            </p>
            <p className="font-light text-sm text-white">
              Your current balance is Rp. {numberWithCommas(20000000)}
            </p>
          </div>
        </section>
      );
    };

export default TopUpStatus