import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout";
import MobileChangeBind from "../pages/User/MobileChangeBind";
import Home from "../pages/Home";
import MobileHome from "@pages/Home/Mobile/index.tsx";
import MobileLogin from "@pages/Login/MobileLogin";
import UserCenter from '@pages/User/Index'
import R0UpdatePwd from "@pages/User/R0UpdatePwd";
import SteamChangeBind from "@pages/User/SteamChangeBind";
import WebProvider from "@/routes/WebProvider.tsx";
import TokenProvider from "@/routes/TokenProvider.tsx";
import MobileProvider from "@/routes/MobileProvider.tsx";
import Back from "@pages/Back";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WebProvider children={<Layout header={false}/>}/>, // 防止进入mobile
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
                    // Steam换绑
                    {
                        path: 'changeSteamAccount',
                        element: <SteamChangeBind/>
                    },
                ]
            }
        ]
    },
    {
        path: "/mobile",
        element: <MobileProvider children={<Layout header={false}/>}/>,
        children: [
            // 首页
            {
                index: true,
                element: <MobileHome/>
            },
            {
                path: 'center',
                element: <UserCenter/>
            },
            {
                path: 'login',
                element: <MobileLogin/>
            },
            {
                path: 'auth',
                element: <TokenProvider children={<Layout header={true}/>}/>,
                children: [
                    // 操作中心
                    {
                        index: true,
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
                    // Steam换绑
                    {
                        path: 'changeSteamAccount',
                        element: <SteamChangeBind/>
                    },
                ]
            }
        ]
    },
    {
        path: "/back",
        element: <Layout header={false}/>,
        children:[
            {
                index: true,
                element: <Back/>
            }
        ]
    },
]);

export default router

