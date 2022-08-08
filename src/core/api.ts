import axios, { AxiosRequestConfig, Method } from "axios";

const { REACT_APP_API_MAIN_URL } = process.env;

const headers = { "X-Requested-With": "XMLHttpRequest" };

export default function apiCaller(
  endpoint: string,
  method: Method,
  config?: AxiosRequestConfig
) {
  return axios({
    method,
    url: `${REACT_APP_API_MAIN_URL}/${endpoint}`,
    ...config,
    headers: {
      ...headers,
      ...config?.headers,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
}
