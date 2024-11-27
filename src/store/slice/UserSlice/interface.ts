import {UserInfo} from "@type/user/interface.ts";
import {InitUserInfo} from "@type/user";

export const initialState: State = {
    token: '',
    userInfo: InitUserInfo,
};

export interface State {
    token: string
    userInfo: UserInfo
}



