import {post} from "@utils/request/RequestMethod";
import {LoginPhoneResp, SendCodeParams, UserInfo} from "@type/user/interface.ts";

/**
 * 手机号换绑
 * @constructor
 */
export function changePhoneApi(data:FieldType.mobileChange) {
    return post<API.Resp<LoginPhoneResp>>(
        '/user/changer/phone',
        data
    )
}

/**
 * 手机号换绑  重置密码 发送验证码
 * @constructor
 */
export function sendCodeByPhoneApi(data:SendCodeParams) {
    return post<API.Resp<string>>(
        '/user/changer/sendCode',
        data
    )
}

/**
 * R0平台修改密码
 * @constructor
 */
export function updateR0PwdApi(data:FieldType.updatePwd) {
    return post<API.Resp<string>>(
        '/user/changer/pwd',
        data
    )
}

/**
 * Steam 换绑
 * @constructor
 */
export function getChangeSteamLinkApi() {
    return post<API.Resp<string>>(
        '/user/changer/genChangSteamIdLink',
    )
}

/**
 * 获取用户信息
 * @constructor
 */
export function getUserInfoApi() {
    return post<API.Resp<UserInfo>>(
        '/user/center/info',
    )
}

/**
 * 退出登录
 * @constructor
 */
export function loginOutApi() {
    return post<API.Resp<string>>(
        '/user/center/logout',
    )
}


/**
 * 重置密码
 * @constructor
 */
export function resetPwdApi(data:FieldType.phone) {
    return post<API.Resp<string>>(
        '/user/changer/restPwd',
        data
    )
}


