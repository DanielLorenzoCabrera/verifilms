import axios, { type AxiosInstance, type CreateAxiosDefaults } from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  interface APIDefaults extends CreateAxiosDefaults {
    baseURL: string;
  }
  const { APIKey, baseURL } = config.public;

  const API: AxiosInstance = axios.create({
    baseURL,
    params: { apikey: APIKey },
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: API,
    },
  };
});
