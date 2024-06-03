import { ImageFood, ImageUser } from "@/assets/image";
import { useState } from "react";
import { numberWithCommas } from "../utils/hooks/usePrice";

const DetailFood = () => {
  const [count, setCount] = useState(1);
  const pricePerItem = 20000;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <section className="relative overflow-auto h-screen py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={ImageFood}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Pecel lele
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              accusamus molestias dignissimos quisquam voluptatibus recusandae
              ratione quo saepe doloribus libero, mollitia et eum soluta est
              harum? Cum non omnis odio?
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 me-4 rounded-full"
                src={ImageUser}
                alt=""
              />

              <div className="font-medium my-6 text-neutral-600">
                <p>Pecel lele berkah</p>
              </div>
            </div>
            <span className="font-semibold text-2xl text-neutral-700">
              Rp. {numberWithCommas(200000)}
            </span>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            <div className="shadow border rounded p-4 flex justify-between items-center">
              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-xl text-neutral-700">
                    Harga Satuan: Rp. {numberWithCommas(pricePerItem)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-xl text-neutral-700">
                    Jumlah Beli: {count}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-xl text-neutral-700">
                    Total Harga: Rp. {numberWithCommas(pricePerItem * count)}
                  </span>
                </div>
                <button className="p-2 bg-[#464BD8] hover:bg-[#464BD8]/80 rounded text-white">
                  Checkout
                </button>
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                  onClick={decrement}
                  disabled={count === 1}
                >
                  -
                </button>
                <span className="text-2xl font-bold">{count}</span>
                <button
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailFood;
