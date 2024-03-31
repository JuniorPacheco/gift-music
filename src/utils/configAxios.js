import axios from "axios";

const axiosMusic = axios.create({
  baseURL: "https://backend-final-project-wo31.onrender.com",
});

axiosMusic.interceptors.request.use((config) => {
  config.headers.Authorization = `JWT ${
    localStorage.getItem("userInfo") &&
    JSON.parse(localStorage.getItem("userInfo"))?.state?.user?.token
  }`;
  return config;
});

export { axiosMusic };
