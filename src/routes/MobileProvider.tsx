import {ReactElement, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {isMobile} from "@utils/loginMethod";
import Back from "@pages/Back";

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const location = useLocation()
    const mobile = isMobile()

    if (!mobile) {
       // setTimeout(()=>{
       //     window.location.href = '/'
       // },3000)
        return <Back/>
    }
    if (mobile && !location.pathname.startsWith('/mobile')) {  // 去了一个不是web的界面
        // setTimeout(()=>{
        //     window.location.href = '/mobile'
        // },3000)
        return <Back/>
    }

    return props.children
}

export default Index;