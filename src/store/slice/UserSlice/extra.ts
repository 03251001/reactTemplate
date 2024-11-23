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
            name: '哈哈哈哈哈哈哈哈哈',
            avatar: 'https://pic2.zhimg.com/v2-b9d8d76aea50684749494d3983bb7671_r.jpg'
        })
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

        return thunkAPI.fulfillWithValue(res.data)
    }
)