import axios, { AxiosRequestConfig, AxiosError } from 'axios';

type RequestConfig = {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  path: string;
  params?: any;
  data?: any;
  options?: AxiosRequestConfig;
};
(window as any).axios = axios;
class BaseHTTP {
  private readonly _baseUrl?: string;

  constructor(_baseUrl?: string) {
    this._baseUrl = _baseUrl;
    BaseHTTP.initInterceptors();
  }

  static initInterceptors() {
    axios.interceptors.response.use(
      (res) => res,
      (err: AxiosError) => {
        const { data, status, statusText } = err.response || {};
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({ data, status, statusText });
      },
    );
  }

  get<T>(path: string, params?: any, options?: AxiosRequestConfig) {
    return this._request<T>({
      path, params, method: 'GET', options,
    });
  }

  post<T>(path: string, data?: any, options?: AxiosRequestConfig) {
    return this._request<T>({
      path, data, method: 'POST', options,
    });
  }

  private async _request<T>(config: RequestConfig): Promise<{ data: T }> {
    const {
      path, data = {}, params = {}, method, options,
    } = config;

    const { data: responseData } = await axios.request<T>({
      url: `${this._baseUrl}${path}`,
      method,
      data,
      params,
      ...options,
    });

    return {
      data: responseData,
    };
  }
}

export default BaseHTTP;
