import axios from "axios";
import { getToken } from "@clerk/clerk-react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;

// //for deployment use below code
// const axiosInstance = axios.create({
//   baseURL:
//     "https://hireflowbackend.onrender.com/api" || "http://localhost:3000/api",
//   withCredentials: true,
// });

// export default axiosInstance;
