import axios from "axios";

const projectManagerApi = axios.create({
  baseURL: import.meta.env.MONGODB_URI,
});

projectManagerApi.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return request;
  }
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export default projectManagerApi;
