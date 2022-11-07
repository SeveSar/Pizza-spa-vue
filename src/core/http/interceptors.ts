import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import {
  getInfo,
  getRefreshToken,
  setInfo,
  setRefreshToken,
} from "@/utils/token";
import { callNotification } from "@/utils/notice";
import { updateTokenByRefresh } from "../services/auth";
import { useUserStore } from "@/stores/user";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}
const errorHandler = async (error: AxiosError) => {
  const response = error.response;
  if (!response) {
    return Promise.reject("Unknown Error");
  }
  const { status } = response;
  switch (status) {
    case StatusCode.InternalServerError: {
      callNotification("error", {
        title: "Error",
        text: "Критическая ошибка. Перезагрузите страницу.",
      });
      break;
    }
    case StatusCode.Unauthorized: {
      const refresh = getRefreshToken();
      if (!refresh) {
        useUserStore().logout();
        return Promise.reject(error);
      }
      try {
        const res = await updateTokenByRefresh(refresh);
        if (res) {
          setInfo(res.access_token, {
            id: res.user_id,
            refreshToken: res.refresh_token,
          });
          setRefreshToken(res.refresh_token);
        }
      } catch (e) {
        useUserStore().logout();
        return Promise.reject(e);
      }

      return axios(setTokenHeaders(error.config));
    }
  }

  return Promise.reject(error);
};

const onResponseError = async (error: AxiosError): Promise<AxiosResponse> => {
  return errorHandler(error);
};

const onResponseSuccess = (successRes: AxiosResponse): AxiosResponse =>
  successRes;

const setTokenHeaders = (config: AxiosRequestConfig): AxiosRequestConfig => {
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
};

export default function (http: AxiosInstance) {
  http.interceptors.request.use(setTokenHeaders);
  http.interceptors.response.use(onResponseSuccess, onResponseError);
}
