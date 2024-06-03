import callAPI from "../auth";

export async function getAllProduct() {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/product-service/products`;
  return callAPI({
    url,
    method: "GET",
    token: false,
  });
}
