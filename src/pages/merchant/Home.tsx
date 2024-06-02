import {
  IncomeIcon,
  ProductIcon,
  TransactionIcon,
} from "../../components/icons/Index";

const Home = () => {
  return (
    <div className="mt-6 flex flex-wrap justify-start items-center gap-4">
      <a
        href="#"
        className="flex h-20 w-40 bg-white shadow border flex-col items-center justify-center rounded"
      >
        <div className="flex flex-row items-center justify-center">
          <ProductIcon />
          <span className="font-bold text-gray-600"> 18 </span>
        </div>
        <div className="mt-2 text-sm text-gray-400">Total products</div>
      </a>
      <a
        href="#"
        className="flex h-20 w-40 bg-white shadow border flex-col items-center justify-center"
      >
        <div className="flex flex-row items-center justify-center">
          <TransactionIcon />
          <span className="font-bold text-gray-600"> 102 </span>
        </div>
        <div className="mt-2 text-sm text-gray-400">Total transactions</div>
      </a>
      <a
        href="#"
        className="flex h-20 w-40 bg-white shadow border flex-col items-center justify-center"
      >
        <div className="flex flex-row items-center justify-center">
          <IncomeIcon />

          <span className="font-bold text-gray-600"> Rp. 105.000 </span>
        </div>
        <div className="mt-2 text-sm text-gray-400">Total income</div>
      </a>
    </div>
  );
};

export default Home;
