import {RespVerify, UserInfo} from "@type/user/interface.ts";
import {InitUserInfo} from "@type/user";

export const initialState: State = {
    token: '',
    userInfo: InitUserInfo,
    verifyInfo: {
        id: "",
        imageBase64: "",
        thumbBase64: ""
    },
};

export interface State {
    token: string
    userInfo: UserInfo
    verifyInfo:RespVerify
}



