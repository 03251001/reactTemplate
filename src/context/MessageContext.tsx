import React, {createContext, useEffect} from 'react';
import {message} from 'antd';
import {MessageInstance} from "antd/es/message/interface";
import {useAppDispatch, useAppSelector} from "@store/Index";
import {updateGlobalError} from "@slice/GlobalSlice";
import {initialState} from "@slice/GlobalSlice/interface.ts";

const MessageContext = createContext<MessageInstance | null>(null);

export const MessageProvider = ({children}) => {
    const dispatch = useAppDispatch()

    const [messageApi, contextHolder] = message.useMessage();

    const {
        globalError
    } = useAppSelector(state => state.GlobalSlice || initialState)

    useEffect(() => {
        if (globalError?.text && globalError?.type) {
            messageApi.destroy()
            messageApi[globalError?.type](globalError?.text)
            dispatch(updateGlobalError({
                type: 'error',
                text: ''
            }))
        }
    }, [globalError]);

    return (
        <MessageContext.Provider value={messageApi}>
            {contextHolder}
            {children}
        </MessageContext.Provider>
    );
};


