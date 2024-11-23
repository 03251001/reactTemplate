import {ReactElement,} from 'react';
import {useLocation} from "react-router-dom";
import {isMobile} from "@utils/loginMethod";
import Back from "@pages/Back";

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const location = useLocation()
    const mobile = isMobile()

    if (!mobile) return <Back/>

    if (mobile && !location.pathname.startsWith('/mobile')) {  // 去了一个不是web的界面
        return <Back/>
    }

    return props.children
}

export default Index;