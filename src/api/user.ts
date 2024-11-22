import {get} from "@utils/request/RequestMethod";

/**
 * 手机号换绑
 * @constructor
 */
export function changePhoneApi() {
    return get<API.Resp<string>>(
        '/api/auth/login',
    )
}


/**
 * R0平台修改密码
 * @constructor
 */
export function updateR0PwdApi() {
    return get<API.Resp<string>>(
        '/api/auth/login',
    )
}

/**
 * Steam 换绑
 * @constructor
 */
export function changeSteamApi() {
    return get<API.Resp<string>>(
        '/api/auth/login',
    )
}

