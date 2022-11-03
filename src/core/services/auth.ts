import http from "../http/axios";
import type { DataResponseUser } from "@/types/DataResponseUser";
import type DataResponseUpdateToken from "@/types/DataResponseUpdateToken";

const register = async (
  email: string,
  password: string | number
): Promise<DataResponseUser> => {
  try {
    const res = await http.post<DataResponseUser>(
      `${import.meta.env.VITE_BASE_URL_FIREBASE_AUTH}/accounts:signUp?key=${
        import.meta.env.VITE_FIREBASE_KEY
      }`,
      {
        email,
        password,
      }
    );
    return res.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

const login = async (
  email: string,
  password: string | number
): Promise<DataResponseUser> => {
  try {
    const res = await http.post<DataResponseUser>(
      `${
        import.meta.env.VITE_BASE_URL_FIREBASE_AUTH
      }/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_KEY}`,
      {
        email,
        password,
      }
    );
    return res.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
const updateTokenByRefresh = async (
  token: string
): Promise<DataResponseUpdateToken> => {
  try {
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
    return res.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export { register, login, updateTokenByRefresh };
