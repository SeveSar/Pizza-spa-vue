import http from "../http/http";
import type { DataResponseUser } from "@/types/DataResponseUser";
import type DataResponseUpdateToken from "@/types/DataResponseUpdateToken";
import { isError } from "@/types/ErrorResponse";
import errorHandler from "../errorHandler";
interface DataRequestUser {
  email: string;
  password: string | number;
}

const register = async (
  email: string,
  password: string | number
): Promise<DataResponseUser | null> => {
  const res = await http.post<DataResponseUser>(
    `${import.meta.env.VITE_BASE_URL_FIREBASE_AUTH}/accounts:signUp?key=${
      import.meta.env.VITE_FIREBASE_KEY
    }`,
    {
      email,
      password,
    }
  );

  if (isError(res)) {
    errorHandler(res);
    return null;
  }

  return res.data;
};

const login = async (
  email: string,
  password: string | number
): Promise<DataResponseUser | null> => {
  const res = await http.post<DataResponseUser, DataRequestUser>(
    `${
      import.meta.env.VITE_BASE_URL_FIREBASE_AUTH
    }/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_KEY}`,
    {
      email,
      password,
    }
  );
  if (isError(res)) {
    errorHandler(res);
    return null;
  }
  return res.data;
};
const updateTokenByRefresh = async (
  token: string
): Promise<DataResponseUpdateToken | null> => {
  const res = await http.post<DataResponseUpdateToken>(
    `https://securetoken.googleapis.com/v1/token?key=${
      import.meta.env.VITE_FIREBASE_KEY
    }`,
    {
      grant_type: "refresh_token",
      refresh_token: token,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (isError(res)) {
    errorHandler(res);
    return null;
  }
  return res.data;
};

export { register, login, updateTokenByRefresh };
