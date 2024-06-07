import callAPI from "../../axiosWithConfig";

export async function getAllProduct(userId: number) {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/users/${userId}/products`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function createProduct(data: any) {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/products`;
  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

export async function getTotalProduct(userId: number) {
  try {
    const data = await getAllProduct(userId);
    const responseData = data as { data: { meta: { total_items: number } } };
    const resp = responseData.data.meta.total_items;

    return resp;
  } catch (error) {
    console.error("Failed to get response length", error);
    throw error;
  }
}
