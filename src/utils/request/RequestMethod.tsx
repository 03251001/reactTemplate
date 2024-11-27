import http from "./index.tsx";

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

