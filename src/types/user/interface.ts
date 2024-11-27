export interface UserInfo {
    uid: number
    token: string
    token_m: string
    client_id: string
    banned: number
    match_ban: string
    username: string
    password: string
    rank: number
    rank_1v1: number
    xp: number
    rank_show: string
    steamid: string
    phone: string
    online: number
    online_m: number
    inserver: number
    disabled: number
    regtime: string
    active_time: string
    is_admin: number
}

// 手机号登录响应格式
export interface LoginPhoneResp {
    token: {
        accessToken: string
        tokenType: string
        userType: number
        expires_at: number
    },
    user: UserInfo
}


// 手机号登录入参
export interface LoginByPhoneParams {
    phone: string
    code: string
    key: string
}

// 获取图形验证码响应结构体
export interface RespVerify {
    id: string,
    imageBase64: string
    thumbBase64: string
}

// 手机号登录获取验证码
export interface SendCodeParams {
    phone: string,
    key: string,
    code: SendCodeType,
    angle: string
}

export type SendCodeType = '4' | 'sendPhone' | 'restCode'