import axios from 'axios';
import { camelizeKeys } from 'humps';
import isNil from 'lodash/isNil';
import i18n from '@/i18n';
import { getAccessToken } from '@/libs/ls';
import { genProcessors } from '@/store/helper';

const API_HOST = process.env.API_HOST;

const convertSimpleObjToQueryString = obj =>
  Object.keys(obj)
    .filter(k => !isNil(obj[k]))
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');

export const ClearRequest = (store, type, options) =>
Request(store, type, options, genProcessors(store, type));

const sendRequest = (options) => {
  const { url, method = 'GET', headers, auth = true, lang = true, body, qs, isLogin } = options;
  const HEADER = {
    DeviceOSType: 'ios',
    'Content-Type': isLogin ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json; charset=UTF-8',
    ...headers,
  };
  const locale = `${i18n.locale.toLowerCase()}/`;
  const langUrl = lang ? locale : '';
  const data = isLogin ? convertSimpleObjToQueryString(body) : body;

  if (auth) HEADER.Authorization = `bearer ${getAccessToken()}`;

  return axios({
    baseURL: API_HOST,
    url: `${langUrl}${url}`,
    method: isLogin ? 'POST' : method,
    headers: HEADER,
    params: qs,
    data,
  });
};

/* eslint no-global-assign: "error" */
/* globals Request:true */

export default Request = ({ commit, dispatch, state }, type, options, cbs) => {
  if (cbs && cbs.processing) {
    cbs.processing();
  } else {
    commit(type.base, { type: type.processing, value: true });
  }

  return new Promise((resolve, reject) => {
    sendRequest(options)
      .then((response) => {
        const { data, message, status } = camelizeKeys(response.data);

        if (cbs && cbs.success) {
          cbs.success(response);
        } else {
          commit(type.base, { type: type.success, data, message, status });
        }
        resolve(response);
      })
      .catch((error) => {
        if (cbs && cbs.failure) {
          cbs.failure(error);
        } else {
          commit(type.base, { type: type.failure, error });
        }

        reject(error);
      });
  });
};
