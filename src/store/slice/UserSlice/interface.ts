import {RespVerify, UserInfo} from "@type/user/interface.ts";
import {InitUserInfo, InitVerity} from "@type/user";

export const initialState: State = {
    token: '',
    userInfo: InitUserInfo,
    verifyInfo: InitVerity,
    steamStatus: ''
};

export interface State {
    token: string
    userInfo: UserInfo
    verifyInfo: RespVerify
    steamStatus: SteamStatusType

}

export type SteamStatusType = 'loading' | 'success' | 'error' | ''


