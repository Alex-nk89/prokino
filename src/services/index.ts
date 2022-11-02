import axios, { AxiosRequestConfig } from "axios";

export const configureAxios = () => {
    axios.defaults.baseURL = 'https://kinopoiskapiunofficial.tech/api';
    axios.defaults.headers.common['X-API-KEY'] = '70b23d2e-8d30-4bd6-ad84-b3addb39fa44';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
}

export const api = <T>(
    url: string,
    params: AxiosRequestConfig = {},
): Promise<T> => axios(url, params).then(response => response.data as T)