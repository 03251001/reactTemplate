import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout";
import MobileChangeBind from "../pages/User/MobileChangeBind";
import Home from "../pages/Home";
import MobileLogin from "@pages/Login/MobileLogin";
import UserCenter from '@pages/User/Index'
import R0UpdatePwd from "@pages/User/R0UpdatePwd";
import TokenProvider from "@/routes/TokenProvider.tsx";
import Back from "@pages/Back";
import SteamStatus from "@pages/Login/components/SteamStatus";
import SteamChangeStatus from "@pages/User/SteamChangeStatus";
import ResetPwd from "@pages/User/ResetPwd";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout header={false}/>,
        children: [
            // 首页
            {
                index: true,
                element: <Home/>
            },

            {
                path: 'auth', // 需要登录
                element: <TokenProvider children={<Layout header={true}/>}/>,
                children: [
                    // 操作中心
                    {
                        index: true,
                        element: <UserCenter/>
                    },
                    {
                        path: 'center',
                        element: <UserCenter/>
                    },
                    // 手机号换绑
                    {
                        path: 'changPhoneNumber',
                        element: <MobileChangeBind/>
                    },
                    // R0平台修改密码
                    {
                        path: 'updatePwd',
                        element: <R0UpdatePwd/>
                    },
                    // 忘记密码
                    {
                        path: 'resetPwd',
                        element: <ResetPwd/>
                    },
                ]
            }
        ]
    },
    {
        path: "/mobile",
        element: <Layout header={false}/>,
        children: [
            {
                path: 'login',
                element: <MobileLogin/>
            }
        ]
    },
    {
        path: "/back",
        element: <Layout header={false}/>,
        children: [
            {
                index: true,
                element: <Back/>
            }
        ]
    },
    {
        path: "/steam",
        element: <TokenProvider children={<Layout header={false}/>}/>,
        children: [
            {
                path: 'status',
                element: <SteamStatus/>
            }
        ]
    },
    {
        path: "/bind/steam",
        element: <TokenProvider children={<Layout header={false}/>}/>,
        children: [
            {
                path: 'result',
                element: <SteamChangeStatus/>
            }
        ]
    },
]);

export default router

