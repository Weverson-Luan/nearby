import axios from "axios";

export const Api = axios.create({
  baseURL: "http://192.168.3.92:3333",
  timeout: 7000, // 7 segundos
});
