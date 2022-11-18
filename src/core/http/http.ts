import axios, { AxiosError, AxiosInstance } from "axios";

import initInterceptors from "./interceptors";

import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type ErrorResponse from "@/types/ErrorResponse";

class HTTPService {
  private http: AxiosInstance;

  constructor() {
    this.http = this.initHttp();
  }
  initHttp() {
    const instance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
    initInterceptors(instance);

    return instance;
  }

  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R | ErrorResponse> {
    try {
      const res = await this.http.get<T, R>(url, config);
      return res;
    } catch (error) {
      const err = error as AxiosError;
      return this.processError(err);
    }
  }
  async post<T, U = any, R = AxiosResponse<T>>(
    url: string,
    data: U,
    config?: AxiosRequestConfig
  ): Promise<R | ErrorResponse> {
    try {
      const res = await this.http.post<T, R>(url, data, config);
      return res;
    } catch (error) {
      const err = error as AxiosError;
      return this.processError(err);
    }
  }

  processError(error: AxiosError): ErrorResponse {
    const { request, response } = error;
    if (response) {
      const { message } = response.data.error;
      const status = response.status;
      return {
        error: true,
        message,
        status,
      };
    } else if (request) {
      //request sent but no response received
      return {
        error: true,
        message: "server time out",
        status: 500,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      return {
        message: "opps! something went wrong while setting up request",
        error: true,
        status: 500,
      };
    }
  }
}

export default new HTTPService();
