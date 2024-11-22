import {createSlice} from "@reduxjs/toolkit";

import {initialState, State} from "./interface.ts";


const reducers = {
    updateLoginModal: (state: State, action: { payload: boolean }) => {
        state.loginModalVisible = action.payload;
    }
}


export const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: reducers,
    extraReducers() {

    }
});

// 导出方法
export const {
    updateLoginModal
} = GlobalSlice.actions;

// 默认导出
export default GlobalSlice.reducer;
