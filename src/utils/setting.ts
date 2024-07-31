import axios from "axios";

export const DOMAIN: string = "https://shop.cyberlearn.vn/api";
export const ACCESS_TOKEN: string = "accessToken";
export const USER_LOGIN: string = "userLogin";
export const settings = {
  setStorageJson: (name: string, data: any): void => {
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
  },
  setStorage: (name: string, data: string): void => {
    localStorage.setItem(name, data);
  },
  getStorageJson: (name: string): any | undefined => {
    if (localStorage.getItem(name)) {
      const dataStore: string | undefined | null = localStorage.getItem(name);
      if (typeof dataStore == "string") {
        const data = JSON.parse(dataStore);
        return data;
      }
      return undefined;
    }
    return; //undefined
  },
  getStore: (name: string): string | null | undefined | boolean | any => {
    if (localStorage.getItem(name)) {
      const data: string | null | undefined = localStorage.getItem(name);
      return data;
    }
    return; //undefined
  },
  clearStorage: (name: string) => {
    localStorage.removeItem(name);
  },
};

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config: any) => {
    // Cấu hình các headers cho yêu cầu gửi đi
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${settings.getStorageJson(ACCESS_TOKEN) || ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // Xử lý phản hồi trả về
    return response;
  },
  (error) => {
    // Xử lý lỗi khi nhận phản hồi
    /*
    if (error.response?.status === 400 || error.response?.status === 404) {
      alert(error.response.message)
    }
     */
    if (error.response?.status === 401 || error.response?.status === 403) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;
