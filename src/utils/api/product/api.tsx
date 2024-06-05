import callAPI from "../axiosWithConfig";

export async function getAllProduct() {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/products`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
