import { ImageFood } from "@/assets/image";

const DetailProduct = () => {
  return (
    <a className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start">
      <img src={ImageFood} className="shadow rounded overflow-hidden border" />
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
  );
};

export default DetailProduct;
