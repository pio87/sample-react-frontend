import Axios, { AxiosResponse } from 'axios';
import { app } from '../config';

export async function runRequestRaw<T>(settings: BaseSettings) {
  const { query, params, payload } = settings;

  const data: any = payload;

  const response = await Axios({
    method: query.method,
    url: createUrl(query, params),
    data
  });

  return response as AxiosResponse<T>;
}

export async function runRequest<T>(settings: BaseSettings) {
  const response = await runRequestRaw<T>(settings);
  return response.data;
}

export function createUrl(query: Query, params?: any): string {
  let urlToReplace = `${app.apiUrl}${query.url}`;

  if (params) {
    urlToReplace = replaceParamPlaceholders(urlToReplace, params);
  }

  return urlToReplace;
}

export function replaceParamPlaceholders(urlToReplace: string, params: any) {
  let url = urlToReplace;

  Object.keys(params).forEach((paramName: string) => {
    if (Array.isArray(params[paramName])) {
      const toReplace = params[paramName].map((param: string) => `${paramName}=${param}`).join('&');
      url = url.replace(`:${paramName}`, toReplace);
    } else {
      url = url.replace(`:${paramName}`, params[paramName]);
    }
  });

  return url;
}

export type BaseSettings = {
  query: Query;
  payload?: any;
  params?: any;
};

export type RequestSettings<SettingsParams = {}, SettingsPayload = {}> = {
  requestParams?: SettingsParams;
  requestPayload?: SettingsPayload;
};

export type Query = {
  method: Method;
  url: string;
};

export type Method = 'patch' | 'get' | 'post' | 'put' | 'delete' | 'options';
