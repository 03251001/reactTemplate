import {createAsyncThunk} from "@reduxjs/toolkit";
import {getVerifyApi, LoginByPhoneApi} from "@api/login.ts";
import {LoginByPhoneParams} from "@type/user/interface.ts";
import {getUserInfoApi, loginOutApi} from "@api/user.ts";

/**
 * 手机号登录
 */
export const fetchLoginByPhone = createAsyncThunk('login/phone',
    async (data: LoginByPhoneParams, thunkAPI) => {
        const res = await LoginByPhoneApi(data)

        if (res.code !== 200) {
            return thunkAPI.rejectWithValue(false)
        }

        return thunkAPI.fulfillWithValue(res.data)
    }
)


/**
 * 获取图形验证码
 */
export const fetchVerify = createAsyncThunk('login/pic/verify',
    async (__, thunkAPI) => {
        const res = await getVerifyApi()
        if (res.code !== 200) {
            return thunkAPI.rejectWithValue('')
        }

        console.log(res)

        return thunkAPI.fulfillWithValue(res.data)
    }
)

/**
 * 获取用户信息
 */
export const fetchUserInfo = createAsyncThunk('user/info',
    async (__, thunkAPI) => {
        const res = await getUserInfoApi()
        if (res.code !== 200) {
            return thunkAPI.rejectWithValue(false)
        }

        return thunkAPI.fulfillWithValue(res.data)
    }
)

/**
 * 退出登录
 */
export const fetchLoginOut = createAsyncThunk('login/out',
    async (__, thunkAPI) => {
        const res = await loginOutApi()
        if (res.code !== 200) {
            return thunkAPI.rejectWithValue(false)
        }

        return thunkAPI.fulfillWithValue(res.data)
    }
)
