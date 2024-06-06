import callAPI from "../axiosWithConfig";
import { CheckoutType, TransactionType } from "./types";

export async function verfifyTransaction(data: TransactionType) {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/transactions/verify`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

export async function transactionUser(data: CheckoutType) {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/transactions`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
