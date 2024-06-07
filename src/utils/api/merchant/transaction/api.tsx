import callAPI from "../../axiosWithConfig";

interface Transaction {
  TotalCost: number;
  id: number;
}

export async function getAllTransaction() {
  try {
    const ROOT_API = import.meta.env.VITE_REACT_API_URL;
    const url = `${ROOT_API}/transactions`;
    const response = await callAPI({
      url,
      method: "GET",
      token: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch transactions", error);
    throw error;
  }
}

export async function updateStatusProgress(id: number, data: any) {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/transactions/${id}`;

  return callAPI({
    url,
    method: "PUT",
    data,
    token: true,
  });
}

export async function getTotalTrasnaction() {
  try {
    const data = await getAllTransaction();
    const responseLength = data.meta.totalItems;
    return responseLength;
  } catch (error) {
    console.error("Failed to get response length", error);
    throw error;
  }
}

export async function getTotalIncome(): Promise<number> {
  try {
    const data = await getAllTransaction();
    let totalIncome: number = 0;

    data.data.forEach((transaction: Transaction) => {
      totalIncome += transaction.TotalCost;
    });

    console.log("Total Income:", totalIncome);

    return totalIncome;
  } catch (error) {
    console.error("Failed to get total income", error);
    throw error;
  }
}
