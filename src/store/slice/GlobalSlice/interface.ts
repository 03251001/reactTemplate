import {UserInfo} from "@type/user/interface.ts";
import {InitUserInfo} from "@type/user";

export const initialState: State = {
    loginModalVisible: false,
};

export interface State {
    loginModalVisible: boolean
}



