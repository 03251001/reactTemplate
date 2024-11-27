import {createSlice} from "@reduxjs/toolkit";
import {initialState, State, SteamStatusType} from "./interface.ts";
import {fetchLoginByPhone, fetchLoginOut, fetchUserInfo, fetchVerify} from "@slice/UserSlice/extra.ts";
import {RespVerify, UserInfo} from "@type/user/interface.ts";
import {InitUserInfo} from "@type/user";


const reducers = {
    updateVerifyInfo: (state: State, action: { payload: RespVerify }) => {
        state.verifyInfo = action.payload
    },
    updateToken: (state: State, action: { payload: string }) => {
        state.token = action.payload
    },
    updateSteamStatus: (state: State, action: { payload: SteamStatusType }) => {
        state.steamStatus = action.payload
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
        builder.addCase(fetchVerify.fulfilled, (state, action) => {
            state.verifyInfo = action.payload
        })
        builder.addCase(fetchLoginByPhone.fulfilled, (state, action) => {
            state.userInfo = action.payload.user
            state.token = action.payload.token.accessToken
        })
        builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
            state.userInfo = action.payload
        })
        builder.addCase(fetchLoginOut.fulfilled, (state, action) => {
            state.userInfo = InitUserInfo
            state.token = ''
            state.steamStatus = ''
        })
    }
});

// 导出方法
export const {
    updateVerifyInfo,
    updateToken,
    updateSteamStatus,
    updateUserInfo
} = UserSlice.actions;

// 默认导出
export default UserSlice.reducer;
