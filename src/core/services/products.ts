import http from "../http/axios";

import type { DataResponseProducts } from "@/types/DataResponseProducts";
export const getAllProducts = async (): Promise<DataResponseProducts> => {
  try {
    const res = await http.get<DataResponseProducts>(
      `${import.meta.env.VITE_BASE_URL_FIREBASE_PRODUCTS}`
    );
    return res.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
