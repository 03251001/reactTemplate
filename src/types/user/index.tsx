import {RespVerify, UserInfo} from "@type/user/interface.ts";

export const InitUserInfo: UserInfo = {
    uid: 0,
    token: "",
    token_m: "",
    client_id: "",
    banned: 0,
    match_ban: "",
    username: "",
    password: "",
    rank: 0,
    rank_1v1: 0,
    xp: 0,
    rank_show: "",
    steamid: "",
    phone: "",
    online: 0,
    online_m: 0,
    inserver: 0,
    disabled: 0,
    regtime: "",
    active_time: "",
    is_admin: 0
}

export const InitVerity:RespVerify={
    id: "",
    imageBase64: "",
    thumbBase64: ""
}