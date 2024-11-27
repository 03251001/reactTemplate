import {createSlice} from "@reduxjs/toolkit";
import {initialState, State} from "./interface.ts";
import {UserInfo} from "@type/user/interface.ts";


const reducers = {
    updateToken: (state: State, action: { payload: string }) => {
        state.token = action.payload
    },
    updateUserInfo: (state: State, action: { payload: UserInfo }) => {
        state.userInfo = action.payload
    }
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: reducers,
    extraReducers(builder) {

    }
});

// 导出方法
export const {
    updateToken,
    updateUserInfo
} = UserSlice.actions;

// 默认导出
export default UserSlice.reducer;
