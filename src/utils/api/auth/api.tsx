import callAPI from "../axiosWithConfig";
import { LoginType } from "./types";

export async function userLogin(data: LoginType) {
  const ROOT_API = import.meta.env.VITE_REACT_API_URL;
  const url = `${ROOT_API}/login`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
