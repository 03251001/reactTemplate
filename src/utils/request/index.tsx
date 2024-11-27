import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {RespErrorHandler,} from "./RespErrorHandler.tsx";
import {getNewRequestUrl} from "./RequestUrl.ts";
import {getToken} from "@handle/user.ts";
import {v4 as uuidV4} from 'uuid';
import {ReqEncrypt} from "@utils/rsa/ReqUtils.ts";
import {xorDecrypt} from "@utils/request/RespUtils.ts";

const eq = true

const http: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 3000,
});

// 请求拦截器
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {

        console.log(`入参${config?.url}\n`,config.data)

        config.headers['asset'] = 1
        config.headers['request'] = uuidV4()

        // 设置token
        const token = getToken();
        if (token) {
            config.headers.Authorization = token
        }

        // 混入了时间戳的url
        if (config.url) config.url = getNewRequestUrl(config.url)

        // 加密
        if (eq || import.meta.env.MODE === 'production') {
            config.data = ReqEncrypt(config.data)
        }
        return config;
    },
    (error) => {
        // 请求错误时的处理
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    (response: AxiosResponse) => {
        // 解密
        let {data} = response
        if (eq || import.meta.env.MODE === 'production') {
            data = JSON.parse(xorDecrypt(data))
        }

        const startIdx = response.request.responseURL.indexOf('/api') + 4; // 从 "/api" 后面开始（4 是 "/api" 的长度）
        const endIdx = response.request.responseURL.indexOf('?sign');
        const result = response.request.responseURL.substring(startIdx, endIdx);

        console.log(`响应${result}\n`,data)


        const {code} = data

        if (code === 200) {
            return data
        }
        RespErrorHandler(data)
    },
    (error) => {
        if (error.response) {
            RespErrorHandler(error.response.data)
        } else {  // 请求未发出或网络错误
            console.error('Network error or request timeout')
        }
        return Promise.reject(error.response);
    }
);

export default http;
// 15273034239