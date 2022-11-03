import type { UserInfo } from "@/types/UserInfo";

export const setInfo = (token: string, user: UserInfo): void => {
  localStorage.setItem("TOKEN", token);
  localStorage.setItem("USER", JSON.stringify(user));
};

export const getInfo = (): { token: string; user: UserInfo } | null => {
  const token = localStorage.getItem("TOKEN");
  const user = localStorage.getItem("USER");
  if (user && token) {
    return { token, user: JSON.parse(user) };
  }
  return null;
};

export const delInfo = (): void => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USER");
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("REFRESH_TOKEN") ?? null;
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem("REFRESH_TOKEN", token);
};
export const delRefreshToken = (): void => {
  localStorage.removeItem("REFRESH_TOKEN");
};
