import { FilterIcon, SearchIcon } from "../../components/icons/Index";
import { Daum } from "@/utils/api/merchant/transaction/types";
import {
  getAllTransaction,
  updateStatusProgress,
} from "@/utils/api/merchant/transaction/api"; // Pastikan import benar
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { useEffect, useState } from "react";
import { numberWithCommas } from "@/utils/hooks/usePrice";

const Transaction = () => {
  const [transactions, setTransactions] = useState<Daum[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getAllTransaction();
        setTransactions(response.data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const handleStatusUpdate = async (
    transactionId: number,
    newStatus: string
  ) => {
    try {
      await updateStatusProgress(transactionId, {
        status_progress: newStatus,
      });

      window.location.reload();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <div className="relative mobile:rounded-xl my-6">
        <div className="flex flex-column mobile:flex-row flex-wrap space-y-4 mobile:space-y-0 items-center justify-between pb-4">
          <div>
            <div className="relative inline-block text-left">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-flex gap-2 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded text-sm px-3 py-1.5"
                    type="button"
                  >
                    <FilterIcon />
                    Filter
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Progress</DropdownMenuItem>
                  <DropdownMenuItem>Name</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <label htmlFor="transaction-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              id="transaction-search"
              className="block p-2 ps-10 text-sm text-neutral-600 border border-gray-300 rounded w-80 bg-white"
              placeholder="Search for transaction"
            />
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 rounded shadow border">
          <thead className="text-xs text-gray-700 uppercase bg-white border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order id
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                qty
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
              <th scope="col" className="px-6 py-3">
                Status Pembayaran
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{transaction.OrderID}</td>
                <td className="px-6 py-4">{transaction.CustName}</td>
                <td className="px-6 py-4">{transaction.ProductName}</td>
                <td className="px-6 py-4">{transaction.Quantity}</td>
                <td className="px-6 py-4">
                  Rp. {numberWithCommas(transaction.TotalCost)}
                </td>
                <td className="px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <span className="p-2 bg-white border rounded">
                        {transaction.StatusProgress}
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() =>
                          transaction.ID !== undefined &&
                          handleStatusUpdate(transaction.ID, "Sedang Dimasak")
                        }
                      >
                        Sedang Dimasak
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          transaction.ID !== undefined &&
                          handleStatusUpdate(transaction.ID, "Sedang Diantar")
                        }
                      >
                        Sedang Diantar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          transaction.ID !== undefined &&
                          handleStatusUpdate(transaction.ID, "Sudah Diantar")
                        }
                      >
                        Sudah Diantar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
                <td className="px-6 py-4 text-green-500">
                  {transaction.StatusPayment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
