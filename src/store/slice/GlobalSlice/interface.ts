export const initialState: State = {
    globalError: {
        type: 'error',
        text: '',
    },
};

export interface State {
    // 全局错误提示文本
    globalError: GlobalError
}

export type  GlobalError = {
    type: 'error' | 'success' | 'warning',
    text: string
}



