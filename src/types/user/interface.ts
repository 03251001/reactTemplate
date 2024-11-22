export interface UserInfo {
    name: string,
    avatar: string
}

// 手机号登录入参
export interface LoginByPhoneParams {
    phone: string
    code: number
}

// 手机号登录表单
export declare namespace LoginFieldType {
    type phone = {
        phone: string
        code: number
    }
}

// 获取图形验证码响应结构体
export interface RespVerify{
    id:string,
    imageBase64:string
    thumbBase64:string
}

// 获取图形验证码响应结构体
export interface CheckVerifyParams{
    key:string,
    angle:string
}
