import {isMobile} from "@utils/loginMethod";

export const RouterPath = () => {
    const mobile = isMobile()

    // if (mobile) {
    //     return {
    //         home: '/mobile',
    //         login: '/mobile/login',
    //         center: '/mobile/auth/center',
    //         changPhoneNumber: '/mobile/auth/changPhoneNumber',
    //         updatePwd: '/mobile/auth/updatePwd',
    //         changeSteamAccount: '/mobile/auth/changeSteamAccount',
    //     }
    // } else {
    //     return {
    //         home: '/',
    //         center: '/auth/center',
    //         changPhoneNumber: '/auth/changPhoneNumber',
    //         updatePwd: '/auth/updatePwd',
    //         changeSteamAccount: '/auth/changeSteamAccount',
    //     }
    // }
    return {
        home: '/',
        center: '/auth/center',
        changPhoneNumber: '/auth/changPhoneNumber',
        updatePwd: '/auth/updatePwd',
        changeSteamAccount: '/auth/changeSteamAccount',
        mobileLogin:'/mobile/login',
        resetPwd:'/auth/resetPwd'
    }
}