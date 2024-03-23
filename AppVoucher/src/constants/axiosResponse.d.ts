import { AxiosResponseHeaders, InternalAxiosRequestConfig, RawAxiosResponseHeaders } from "axios";

// import { AxiosResponse } from "axios";
export interface AxiosResponse<T = any, D = any> {
  msg: string;
  index: T,
  data: T;
  success: boolean;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
}