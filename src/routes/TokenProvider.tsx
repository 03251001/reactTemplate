import {ReactElement, useEffect} from 'react';
import {useAppSelector} from "@store/Index";
import Home from "@pages/Home";
import {RouterPath} from "@/routes/routerPath.ts";
import {initialState} from "@slice/UserSlice/interface.ts";

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const routerPath = RouterPath()

    const {
        token
    } = useAppSelector(state => state.UserSlice || initialState)

    useEffect(() => {
        if (token) { // 获取用户信息...
        }
    }, [token]);


    if (!token) {
        history.replaceState(null, '',routerPath.home )
        return <Home/>
    }


    return props.children
}

export default Index;