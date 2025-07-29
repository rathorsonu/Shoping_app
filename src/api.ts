// src/api/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com", // replace with your base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
