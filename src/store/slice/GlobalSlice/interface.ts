export const initialState: State = {
    loginModalVisible: false,
    globalError: {
        type: 'error',
        text: '',
    },
};

export interface State {
    // 是否显示登录弹窗
    loginModalVisible: boolean
    // 全局错误提示文本
    globalError:GlobalError
}

export type  GlobalError = {
    type: 'error' | 'success' | 'warning',
        text: string
}



