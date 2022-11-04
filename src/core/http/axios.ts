import axios from "axios";
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import {
  getInfo,
  getRefreshToken,
  setInfo,
  setRefreshToken,
} from "@/utils/token";
import { updateTokenByRefresh } from "../services/auth";
const instance: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

function setTokenHeaders(config: AxiosRequestConfig): AxiosRequestConfig {
  const notRequiredUrls = ["/products", "/user"];
  const url = config.url;
  const isFound = notRequiredUrls.some((currentUrl) =>
    url?.includes(currentUrl)
  );
  if (isFound) {
    return config;
  }
  const userInfo = getInfo();
  const token = userInfo?.token;
  config.headers = config.headers ?? {};
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}

instance.interceptors.request.use(setTokenHeaders);
instance.interceptors.response.use(
  (successRes: AxiosResponse): AxiosResponse => successRes,
  async (error: AxiosError): Promise<AxiosError | AxiosResponse> => {
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }
    const refresh = getRefreshToken();
    console.log(refresh, "ref");
    if (!refresh) {
      return Promise.reject(error);
    }
    try {
      const res = await updateTokenByRefresh(refresh);
      setInfo(res.access_token, {
        id: res.user_id,
        refreshToken: res.refresh_token,
      });
      setRefreshToken(res.refresh_token);
    } catch (e) {
      return Promise.reject(e);
    }

    return axios(setTokenHeaders(error.config));
  }
);
export default instance;
