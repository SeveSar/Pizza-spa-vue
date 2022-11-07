import http from "../http/http";
import { isError } from "@/types/ErrorResponse";
import type { DataResponseProducts } from "@/types/DataResponseProducts";
import errorHandler from "@/core/errorHandler";

export const getAllProducts =
  async (): Promise<DataResponseProducts | null> => {
    const res = await http.get<DataResponseProducts>(
      `${import.meta.env.VITE_BASE_URL_FIREBASE_PRODUCTS}`
    );
    if (isError(res)) {
      errorHandler(res);
      return null;
    }
    return res.data;
  };
