import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import camelcaseKeys from "camelcase-keys";

import {BASE_URL, REQUEST_TIMEOUT, HTTPCode} from "../consts/api";

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response: AxiosResponse) => {
    return {...response, data: camelcaseKeys(response.data, {deep: true})};
  };

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
