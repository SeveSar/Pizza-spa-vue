import axios from "axios";
import {
  getInfo,
  getRefreshToken,
  setInfo,
  setRefreshToken,
} from "@/utils/token";
import { updateTokenByRefresh } from "../services/auth";
const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

function setTokenHeaders(config) {
  if (
    config.url.includes("products") ||
    config.url.includes("user")
    // config.url.includes("securetoken.googleapis.com/v1/token")
  ) {
    return config;
  }
  const userInfo = getInfo();
  const token = userInfo?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}

instance.interceptors.request.use(setTokenHeaders);
instance.interceptors.response.use(
  (successRes) => successRes,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const refresh = getRefreshToken();
    if (refresh) {
      try {
        const { data } = await updateTokenByRefresh(refresh);
        setInfo(data.access_token, {
          id: data.user_id,
          refreshToken: data.refresh_token,
        });
        setRefreshToken(data.refresh_token);
      } catch (e) {
        return Promise.reject(e);
      }
    } else {
      return Promise.reject(error);
    }

    return axios(setTokenHeaders(error.config));
  }
);
export default instance;
