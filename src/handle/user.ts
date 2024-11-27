import {store} from "@store/Index";
import {updateToken, updateUserInfo} from "@slice/UserSlice";
import {InitUserInfo} from "@type/user";

export function getToken() {
    return store.getState()?.UserSlice?.token || ''
}

/**
 * 需要token的点击事件
 */
export function needTokenClick(errorBack: () => void,successBack: () => void) {
    const token = getToken()
    if (!token) {
        errorBack()
        return
    }
    successBack()
}

/**
 * 清空用户信息
 */
export function loginOutHandler() {
    store.dispatch(updateToken(''))
    store.dispatch(updateUserInfo(InitUserInfo))
}