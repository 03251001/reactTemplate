import {post} from "@utils/request/RequestMethod";
import {CheckVerifyParams, LoginByPhoneParams, RespVerify} from "@type/user/interface.ts";

/**
 * 手机验证码登录
 */
export function LoginByPhoneApi(data: LoginByPhoneParams) {
    return post<API.Resp<string>>(
        '/login/phone',
        data
    )
}

/**
 * 手机发送验证码
 */
export function SendCodeQApi(phone: string) {
    return post<API.Resp<string>>(
        '/login/sendCode',
        {phone}
    )
}

/**
 * Steam授权登录
 */
export function LoginSteamApi() {
    return post<API.Resp<string>>(
        '/api/auth/login',
    )
}

/**
 * 获取图形验证
 */
export function getVerifyApi() {
    return post<API.Resp<RespVerify>>(
        '/common/verify/code',
    )
}

/**
 * 验证图形
 */
export function checkVerifyApi(data: CheckVerifyParams) {
    return post<API.Resp<null>>(
        '/common/verify/check',
        data
    )
}
