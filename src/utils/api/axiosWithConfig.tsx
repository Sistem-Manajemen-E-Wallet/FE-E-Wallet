import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { useToken } from "../contexts/useToken";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: CallAPIProps) {
  let headers = {};

  if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const respon = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (respon.status == 401) {
    const { changeToken } = useToken();
    changeToken("");
  }

  if (
    respon.status == 400 ||
    respon.status == 403 ||
    respon.status == 404 ||
    respon.status == 500
  ) {
    const res = {
      error: true,
      statusCode: respon.status,
      message: respon.data.message,
      data: null,
    };
    return res;
  }

  const length = Object.keys(respon.data).length;

  const res = {
    error: false,
    statusCode: respon.status,
    message: "success",
    data: length > 1 ? respon.data : respon.data.data,
  };
  return res;
}
