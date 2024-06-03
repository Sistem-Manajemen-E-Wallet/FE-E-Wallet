import { numberWithCommas } from "../utils/hooks/usePrice";

const HistoryComp = (props: {
  date: string;
  status: string;
  name: string;
  type: string;
  price: number;
}) => {
  return (
    <div className="bg-white mb-5 hover:bg-slate-400 py-2 px-2">
      <div className="flex justify-between">
        <p className="font-light">{props.date}</p>
        <div
          className={`${
            props.status == "Success" ? `bg-green-600` : `bg-yellow-500`
          } rounded-full`}
        >
          <p className="px-3 py-3 text-white">{props.status}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <p className="font-medium mb-2">{props.name}</p>
          <p className="font-thin">{props.type}</p>
        </div>
        <div className="flex items-end">
          <p
            className={`${props.price < 0 ? `text-red-600` : `text-green-600`}`}
          >
            Rp <span>{numberWithCommas(props.price)}</span>
          </p>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-black mt-2" />
    </div>
  );
};

export default HistoryComp;
