import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";

import {BASE_URL, REQUEST_TIMEOUT, HTTPCode} from "./const";

type FailCallbacks = {
  onBadRequest: () => void;
  onUnauthorized: () => void;
  onNotFound: () => void;
}

export const createAPI = (callbacks: FailCallbacks): AxiosInstance => {
  const {onBadRequest, onUnauthorized, onNotFound} = callbacks;
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
        onBadRequest();
        throw error;
      case HTTPCode.UNAUTHORIZED:
        onUnauthorized();
        throw error;
      case HTTPCode.NOT_FOUND:
        onNotFound();
        throw error;
      default:
        throw error;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
