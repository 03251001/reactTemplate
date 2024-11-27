import {createSlice} from "@reduxjs/toolkit";

import {GlobalError, initialState, State} from "./interface.ts";


const reducers = {
    updateGlobalError: (state: State, action: { payload: GlobalError }) => {
        state.globalError = action.payload;
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
    updateGlobalError
} = GlobalSlice.actions;

// 默认导出
export default GlobalSlice.reducer;
