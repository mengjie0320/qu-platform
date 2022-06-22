// import { request } from '@tencent/imutils';
// import * as request  from 'request';
import axios from 'axios';
import { message, notification } from 'antd';
// import humps from 'humps';
// import cgiErrorTips from './cgiErrorTips';
// import logger from './logger';
import { isFormData, isObject } from './tools';

const NO_USER_ERROR = 100007;
const NOT_LOGIN = 100000;

interface F {
  show?: boolean;
  (): void;
}

interface Option {
  method?: string;
  params?: any;
  timeout?: number;
  multipart?: boolean;
  credentials?: 'include';
}

interface Param {
  needLogin: boolean;
  params: any;
}

const needLogin: F = () => {
  if (!needLogin.show) {
    needLogin.show = true;
    notification.error({
      message: '温馨提示',
      description: '登录态失效，请重新登录。',
      duration: 0,
      onClose() {
        needLogin.show = false;
      },
    });
  }
};

const stringifyParamValues = (params: any): any => {
  if (!isObject(params) || isFormData(params)) {
    return params;
  }
  return Object.keys(params).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: isObject(params[cur]) || Array.isArray(params[cur]) ? JSON.stringify(params[cur]) : params[cur],
    }),
    {},
  );
};

const api = <T>(url: string, options: { params?: unknown; method?: string } = {}): Promise<T> => {
  const param: Param = {
    needLogin: false,
    ...options,
    params: stringifyParamValues(options.params),
  };
  return axios(url, param)
    .then((value: any) => {
      if (!value.result) {
        return value;
      }
      return {
        ...value,
        // result: humps.camelizeKeys(value.result),
      };
    })
    .catch((err: { retcode: number }) => {
        console.log('err', err);
        // 处理统一报错，如登录态、权限、功能账户等其他必备信息、权限？
    });
};

export default api;

export function requestWithTips<T>(
  url: string,
  options: Option = { method: 'GET', timeout: 30000 },
  tips = true,
): Promise<T> {
  const startTime = Date.now();
  let retcode = 0;

  return api<T>(url, options)
    .then((resp: any) => {
      // console.log('resp===>', resp);
      retcode = resp.retcode;
      return resp;
    })
    .catch((e) => {
      retcode = e.retcode;
      // console.log('requestWithTips, error:', e);
      const err = { url, ...e };
      if (err.retcode !== 109010) {
        // prohibit error tips when logined user is not a tutor
        // if (tips) {
        //   cgiErrorTips(err as unknown as CgiError);
        // }
      }
      throw err;
    })
    .finally(() => {
      const costTime = Date.now() - startTime;
    //   logger.speed(url, options.method || 'GET', costTime, retcode);
    });
}
