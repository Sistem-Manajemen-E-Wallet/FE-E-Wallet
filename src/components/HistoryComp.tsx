import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "../utils/hooks/usePrice";

const HistoryComp = (props: {
  date: string;
  status: string;
  name: string;
  type: string;
  price: number;
  id?: number;
}) => {
  const navigate = useNavigate();

  const cardDetail = () => {
    const key =
      props.type === "payment"
        ? `/payment-detail?price=${props.price}`
        : `/top-up-status?id=${props.id}`;
    navigate(key);
  };

  return (
    <div
      className="bg-white mb-5 hover:bg-slate-400 py-2 px-2"
      onClick={cardDetail}
    >
      <div className="flex justify-between">
        <p className="font-light">{props.date}</p>
        <div
          className={`${
            props.status == "Paid"
              ? `bg-green-600`
              : props.status == "Success"
              ? `bg-blue-600`
              : props.status == "Pending"
              ? `bg-yellow-500`
              : `bg-red-600`
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
            className={`${
              props.type === "payment" ? `text-red-600` : `text-green-600`
            }`}
          >
            {props.type === "payment" ? <span>-</span> : null}Rp{" "}
            <span>{numberWithCommas(props.price)}</span>
          </p>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-black mt-2" />
    </div>
  );
};

export default HistoryComp;
