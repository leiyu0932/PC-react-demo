import axios from 'axios';
import { message } from 'antd';

import qs from 'qs';


// create an axios instance
const service = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  baseURL: '/service-api',
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 45000, // request timeout
});

const commonFetch = ({
  url, // `url` 是用于请求的服务器 URL
  msg,
  method = 'get', // `method` 是创建请求时使用的方法
  params = null, // 请求参数
  headers = {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  throwError = false, // 手动异常处理
  notError = false,
}) => {
  // 参数里未传地址时
  if (!url) {
    return Promise.resolve(null)
      .then((res) => res)
      .finally(() => {
        message.error({
          content: '网络请求-请传入参数api',
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
        });
        console.error('网络请求-请传入参数api');
      });
  }

  //处理color参数
  params = {
    appid: 'CY-H5',
    t: new Date().getTime(),
    functionId: url,
    client: 'pc',
    body: {
      ...params,
    },
    // pin: '3333',
  };

  // if(method === 'post'){
  //   params.body = {
  //     data: params.body
  //   }
  // }

  const requestParams = {
    method,
    url,
    data: method === 'post' ? params : {},
    params: method === 'post' ? {} : params,
    headers,
    // 是可选方法，主要用于序列化`params`
    paramsSerializer:
      method === 'get'
        ? (params) => {
            return Object.keys(params)
              .map(
                (k) =>
                  encodeURIComponent(k) +
                  '=' +
                  (params && params[k] && params[k].constructor === Object
                    ? encodeURIComponent(JSON.stringify(params[k]))
                    : encodeURIComponent(params[k]))
              )
              .join('&');
          }
        : () => '',
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest:
      method === 'post'
        ? [
            function (data) {
              // 对 data 进行任意转换处理
              let tmp = { ...data, body: JSON.stringify(data.body) };
              return qs.stringify(tmp);
            },
          ]
        : () => {},
  };

  return service(requestParams)
    .then((res) => {
      // 返回默认处理过的结果
      return handleResponse(res, msg, method);
    })
    .catch((error) => {
      // 手动异常处理
      if (throwError) throw error;
      if (notError) return null;
      // 返回默认的错误处理
      return handleError(error);
    });
};

// 统一数据返回处理 200:正常  401:未登录  -1:失败  -2:参数基础校验不合法  -3:系统异常
const handleResponse = (
  res,
  msg
) => {
  let code = Number(res?.data?.code);
  // color -1 时使用业务的code
  if (code === -1) {
    code = Number(res?.data?.echo);
  }
  switch (code) {
    //正常
    case 200:
      // if (needSuccessMessage(msg, method)) {
      //   message.success({
      //     content: (msg && msg + '成功！') || res.data.message || '操作成功！',
      //   });
      // }
      return res.data.data;
    case 302:
      if (window.location.pathname !== '/login') {
        window.location.href = `${window.location.origin}/login?returnUrl=${window.location.href}`;
      }
      // 区分302 解决页面闪一下的问题
      return undefined;
    default:
      if (msg !== false && window.location.pathname !== '/login') {
        message.error({
          content: (msg && msg + '失败！') || res?.data?.message || '请求错误',
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
        });
      }
      return null;
  }
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  401: '用户没有登录。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
  '-1': '失败',
  '-2': '参数基础校验不合法',
  '-3': '系统异常',
};

// 统一数据返回错误处理  200:正常  401:未登录  -1:失败  -2:参数基础校验不合法  -3:系统异常
export const handleError = (error) => {
  console.dir('handleError: ', window);
  if (error.response) {
    const status = Number(error?.response?.status);
    // 401表示未登录，跳转登录页
    if (status === 401) {
      window.location.href = `${window.location.origin}/login?returnUrl=${window.location.href}`;
    }

    const errorText =
      codeMessage[error?.response?.status] ||
      error?.response?.message ||
      '请求错误';
    message.error({
      content: errorText,
      // className: 'custom-class',
      // style: {
      //   marginTop: '20vh',
      // },
    });
  }
  return null;
};

/**
 *
 * @param url 请求地址
 * @param params 请求参数
 * @param extendParams 扩展参数
 * @returns
 */
export const getRequest = ({
  url,
  params,
  extendParams = {},
}) => {
  return commonFetch({ url, method: 'get', params, ...extendParams });
};

/**
 * @param url 请求地址
 * @param params 请求参数
 * @param extendParams 扩展参数
 * @returns
 */
export const postRequest = ({
  url,
  params,
  extendParams = {},
}) => {
  return commonFetch({ url, method: 'post', params, ...extendParams });
};

const request = {
  getRequest,
  postRequest,
};

export default request;
