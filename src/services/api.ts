import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";

import {BASE_URL, REQUEST_TIMEOUT, HTTPCode} from "./const";

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (error: AxiosError) => {
    const {response} = error;

    switch (response?.status) {
      case HTTPCode.BAD_REQUEST:
        throw error;
      case HTTPCode.UNAUTHORIZED:
        throw error;
      case HTTPCode.NOT_FOUND:
        throw error;
      default:
        throw error;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
