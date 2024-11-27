import {ReactElement, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@store/Index";
import Home from "@pages/Home";
import {fetchUserInfo} from "@slice/UserSlice/extra.ts";
import {RouterPath} from "@/routes/routerPath.ts";
import {initialState} from "@slice/UserSlice/interface.ts";

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const dispatch = useAppDispatch()
    const routerPath = RouterPath()

    const {
        token
    } = useAppSelector(state => state.UserSlice || initialState)

    useEffect(() => {
        if (token) {
            dispatch(fetchUserInfo())
        }
    }, [token]);


    if (!token) { // todo:在这个地方要么做一个手机号验证码的验证，要么让用户登录 ,这里先做的是让用户登录，后续跟后端沟通
        history.replaceState(null, '',routerPath.home )
        return <Home/>
    }


    return props.children
}

export default Index;