import axios from "axios";
// const baseURL =
//   import.meta.env.MODE == "development"
//     ? "http://localhost:7000"
//     : import.meta.env.VITE_BASE_URL;
const axiosPublic = axios.create({
  // baseURL: baseURL,
//   baseURL: "https://carecampuspro-server-side.vercel.app",
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
