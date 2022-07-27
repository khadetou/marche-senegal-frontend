import axios from "axios";
import cookie from "js-cookie";

const getUser = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get("http://localhost:5000/auth/user", config);
  return { data, token };
};

const register = async (userData: any) => {
  const { data } = await axios.post(
    "http://localhost:5000/auth/signup",
    userData
  );
  return data;
};

const login = async (userData: any) => {
  const { data } = await axios.post(
    "http://localhost:5000/auth/signin",
    userData
  );
  if (data) {
    setCookie("token", data.accessToken);
    localStorage.setItem("token", JSON.stringify(data));
  }

  return data;
};

const logout = () => {
  removeCookie("token");
  localStorage.removeItem("token");
};

//SET COOKIE

const setCookie = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};

export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
};

const getCookieFromServer = (key: string, req: any) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c: any) => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
};

export const getCookie = (key: string, req: any) => {
  return typeof window !== "undefined"
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const authService = {
  register,
  logout,
  login,
  getUser,
  getCookie,
  removeCookie,
  setCookie,
};

export default authService;
