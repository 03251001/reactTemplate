import React, {createContext, useContext, useEffect} from 'react';
import {message} from 'antd';
import {MessageInstance} from "antd/es/message/interface";
import {useAppSelector} from "@store/Index";

const MessageContext = createContext<MessageInstance | null>(null);

export const MessageProvider = ({children}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const {
        globalError
    } = useAppSelector(state => state.GlobalSlice)

    useEffect(() => {
        if (globalError?.text && globalError?.type) {
            messageApi[globalError?.type](globalError?.text)
        }
    }, [globalError]);

    return (
        <MessageContext.Provider value={messageApi}>
            {contextHolder}
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageApi = () => {
    return useContext(MessageContext);
};
