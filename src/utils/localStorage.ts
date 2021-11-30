import { CartItem } from "contexts/Cart";

const APP_KEY = "@MKTPLACE";

export const getStorageItem = (key: string) => {
  if (typeof window === "undefined") return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);
  return JSON.parse(data!);
};

export const setStorageItem = (key: string, value: CartItem[]) => {
  if (typeof window === "undefined") return;

  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
};
