import axios from "axios";
const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL || null });

let store;
export const injectStore = (_store) => {
  store = _store;
};
axiosInstance.interceptors.request.use((config) => {
  let token = store.getState()?.userObj?.userObj?.token;
  if (token !== undefined && token !== null && token?.length > 0) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    if (typeof window !== "undefined") {
      if (error?.response?.status === 401) {
        window.location.href = "/";
      }
    }
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
