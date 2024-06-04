import callAPI from "../axiosWithConfig";

export async function userProfile() {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/users`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
