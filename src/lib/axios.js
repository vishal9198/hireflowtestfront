import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true, //by adding this field browser will send the cookies to server automatically on every request
});
export default axiosInstance;

// //for deployment use below code
// const axiosInstance = axios.create({
//   baseURL:
//     "https://hireflowbackend.onrender.com/api" || "http://localhost:3000/api",
//   withCredentials: true,
// });

// export default axiosInstance;
