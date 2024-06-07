import callAPI from "../axiosWithConfig";

export async function getHistory(page: number, limit: number) {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/histories?page=${page}&limit=${limit}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
