// 接口响应正常 code错误
export  function RespErrorHandler(data: API.Resp<any>) {
    switch (data.code) {
        case 401:
            break
        case 500:
            break
    }
}

// 服务器返回了错误响应 接口未响应
export function ServerErrorCodeHandler(errResponse: any) {
    const {status, data} = errResponse;

    switch (data.code) {
        case 401: // 401 Unauthorized 错误处理，可能是 token 过期
            console.error('Token expired. Please login again')
            break
    }
}