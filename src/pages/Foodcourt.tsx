import foodImage from "../assets/food.png";

const Foodcourt = () => {
  return (
    <section className="relative overflow-auto h-screen py-32">
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
          <span className="text-neutral-600">Foodcourt</span>
        </div>

        <div className="flex justify-between">
          <h5 className="text-neutral-700 font-bold text-xl">
            What would your like to eat ?
          </h5>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari menu hari ini.."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-6">
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
          <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
            <img
              src={foodImage}
              className="shadow rounded overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-semibold text-xl">Pecel lele</h4>
              <span className="text-lg font-bold">Rp. 20.000</span>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]"
                >
                  BUY
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Foodcourt;
