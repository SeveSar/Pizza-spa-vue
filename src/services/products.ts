import http from "./axios";
import type { DataResponseProducts } from "@/types/DataResponseProducts";

export const getAllProducts = async (): Promise<DataResponseProducts> => {
  try {
    return await http.get(`${import.meta.env.VITE_BASE_URL_FIREBASE_PRODUCTS}`);
  } catch (e: any) {
    return Promise.reject(e);
  }
};
