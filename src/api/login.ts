import {post} from "@utils/request/RequestMethod";
import {LoginByPhoneParams, LoginPhoneResp, RespVerify, SendCodeParams} from "@type/user/interface.ts";

/**
 * 手机验证码登录
 */
export function LoginByPhoneApi(data: LoginByPhoneParams) {
    return post<API.Resp<LoginPhoneResp>>(
        '/login/phone',
        data
    )
}

/**
 * 手机发送验证码
 */
export function SendCodeQApi(data:SendCodeParams) {
    return post<API.Resp<string>>(
        '/login/sendCode',
        data
    )
}

/**
 * 生成Steam登录链接
 */
export function LoginSteamApi() {
    return post<API.Resp<string>>(
        '/login/steam/genSteamLoginLink',
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

