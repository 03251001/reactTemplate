import http from "./index.tsx";

export function request<T = any>(url: string, opts: any = {method: "get"}): Promise<T> {
    return new Promise((resolve, reject) => {
        http.request<T>({...opts, url,})
            .then((response: any) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function get<T = any>(url: string, params?: any): Promise<T> {
    return new Promise((resolve, reject) => {
        http.request<T>({url, method: 'get', params: {...params}})
            .then((response: any) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function post<T = any>(url: string, data?: any): Promise<T> {
    return new Promise((resolve, reject) => {
        http.request<T>({url, method: 'post', data: {...data}})
            .then((response: any) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

