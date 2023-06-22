import { BaseUrl } from "./URL";
 export const instance = axios.create({
    baseURL: `${BaseUrl}`,
  });