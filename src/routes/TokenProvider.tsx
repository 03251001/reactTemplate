import {ReactElement} from 'react';
import {useAppSelector} from "@store/Index";
import {isMobile} from "@utils/loginMethod";
import Home from "@pages/Home";
import MobileHome from "@pages/Home/Mobile/index.tsx";

interface Props {
    children: ReactElement
}

function Index(props: Props) {

    const {
        token
    } = useAppSelector(state => state.UserSlice)

    const getConfig = () => {
        const mobile = isMobile()

        if (mobile) {
            return {
                key: 'mobile',
                element: <MobileHome/>
            }
        }
        return {
            key: 'web',
            element: <Home/>
        }
    }

    // if (!token) { // todo:在这个地方要么做一个手机号验证码的验证，要么让用户登录 ,这里先做的是让用户登录，后续跟后端沟通
    //     const config = getConfig()
    //
    //     return config.element
    // }

    return props.children
}

export default Index;