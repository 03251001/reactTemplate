import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {persistor, store} from "@store/Index";
import {PersistGate} from "redux-persist/integration/react";
import './styles/global.less'
import {ConfigProvider} from "antd";
import {theme} from "@/styles/theme.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ConfigProvider theme={theme}>
                    <App/>
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
