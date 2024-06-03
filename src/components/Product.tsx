import { ImageFood } from "@/assets/image";
import { numberWithCommas } from "@/utils/hooks/usePrice";
import { Link } from "react-router-dom";

const Product = (props: { name: string; price: number }) => {
  return (
    <Link
      to={"/product-detail"}
      className="p-3 max-w-lg border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-100 flex flex-col items-start"
    >
      <img src={ImageFood} className="shadow rounded overflow-hidden border" />
      <div className="mt-8">
        <h4 className="font-semibold text-xl">{props.name}</h4>
        <span className="text-lg font-bold">
          Rp. {numberWithCommas(props.price)}
        </span>
        <div className="mt-5">
          <p className="inline-flex items-center rounded border border-transparent bg-[#464BD8] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#464BD8]">
            BUY
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
