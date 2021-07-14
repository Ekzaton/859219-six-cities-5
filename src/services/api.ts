import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import camelcaseKeys from "camelcase-keys";

import {BASE_URL, REQUEST_TIMEOUT} from "../consts/api";

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
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
