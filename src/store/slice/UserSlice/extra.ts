import {createAsyncThunk} from "@reduxjs/toolkit";
import {getVerifyApi, LoginByPhoneApi} from "@api/login.ts";
import {LoginByPhoneParams} from "@type/user/interface.ts";

/**
 * 手机号登录
 */
export const fetchLoginByPhone = createAsyncThunk('login/phone',
    async (data: LoginByPhoneParams, thunkAPI) => {
        const res = await LoginByPhoneApi(data)
        if (res.code !== 200) {
            return thunkAPI.rejectWithValue(false)
        }


        return thunkAPI.fulfillWithValue({
            token: "1234556",
            name: 'jjj',
            avatar: ''
        })
    }
)


/**
 * 手机号登录
 */
export const fetchVerify = createAsyncThunk('login/verify',
    async (__, thunkAPI) => {
        const res = await getVerifyApi()
        if (res.code !== 200) {
            return thunkAPI.rejectWithValue('')
        }


        return thunkAPI.fulfillWithValue(res.data)
    }
)