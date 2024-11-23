import {store} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";

export function getToken() {
    return store.getState().UserSlice.token
}

/**
 * 需要token的点击事件
 */
export function needTokenClick(successBack: () => void) {
    const token = getToken()
    if (!token) {
        store.dispatch(updateLoginModal(true))
        return
    }
    successBack()
}

export function needTokenMobileClick(errorBack: () => void, successBack: () => void) {
    const token = getToken()
    if (!token) {
        errorBack()
        return
    }
    successBack()
}
