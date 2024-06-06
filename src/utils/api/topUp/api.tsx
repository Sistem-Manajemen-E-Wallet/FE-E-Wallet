import callAPI from "../axiosWithConfig";
import { TopUpFormType } from "./types";

export async function topUp(data: TopUpFormType) {
    const ROOT_API = import.meta.env.VITE_REACT_API_URL;
    const url = `${ROOT_API}/topups`;
  
    return callAPI({
      url,
      method: "POST",
      token: true,
      data,
    });
  }