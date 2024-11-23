import {List} from "@type/home/interface.ts";

export const list: List[] = [
    {
        title: '修改密码',
        desc: '修改R0对战平台账号密码',
        path: '/auth/updatePwd',
        mobilePath:'/mobile/auth/updatePwd',
        icon: 'r-pwd',
    },
    {
        title: '手机号换绑',
        desc: '忘记或更换手机号？点击这里换绑',
        path: '/auth/changPhoneNumber',
        mobilePath:'/mobile/auth/changPhoneNumber',
        icon: 'r-phone',
    },
    {
        title: 'Steam换绑',
        desc: '去修改已经绑定的Steam账号',
        path: '/auth/changeSteamAccount',
        mobilePath:'/mobile/auth/changeSteamAccount',
        icon: 'r-steam',
    }
]
export const slogan =   '这里是R0对战平台安全中心'
export const desc =   '为您一站式解决账号安全问题！'