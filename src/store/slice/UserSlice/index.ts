import {createSlice} from "@reduxjs/toolkit";

import {initialState, State} from "./interface.ts";
import {fetchVerify} from "@slice/UserSlice/extra.ts";
import {RespVerify} from "@type/user/interface.ts";


const reducers = {
    updateVerifyInfo: (state: State, action: { payload: RespVerify }) => {
        state.verifyInfo = action.payload
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
    }
});

// 导出方法
export const {
    updateVerifyInfo
} = UserSlice.actions;

// 默认导出
export default UserSlice.reducer;
