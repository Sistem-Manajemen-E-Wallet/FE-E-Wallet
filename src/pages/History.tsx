import { useCallback, useEffect, useState } from "react";
import { HistoryComp } from "../components";
import { getHistory } from "@/utils/api/history/api";
import { atom, useAtom } from "jotai";
import { IHistories } from "@/utils/api/history/types";

const historyAtom = atom<IHistories[]>([]);

const History = () => {
  const [histories, setHistories] = useAtom(historyAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const userHistory = async () => {
    const response = await getHistory(currentPage, itemsPerPage);
    if (response.statusCode === 200) {
      setHistories(response.data.data);
      setTotalPages(response.data.meta.total_pages);
    }
  };

  useEffect(() => {
    userHistory();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="relative p-0 overflow-auto h-screen py-40">
      <div className="container">
        {histories.map((item: IHistories) => (
          <HistoryComp
            key={item.id}
            date={item.created_at}
            status={item.status}
            name={item.trx_name}
            type={item.type}
            price={item.amount}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-blue-500 text-white mr-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-blue-500 text-white ml-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default History;
