import callAPI from "../axiosWithConfig";

export async function userWallet() {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/wallets`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
