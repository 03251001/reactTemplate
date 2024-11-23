import {ReactElement,} from 'react';
import {useLocation} from "react-router-dom";
import {isMobile} from "@utils/loginMethod";
import Home from '@pages/Home'
import MobileHome from '@pages/Home/Mobile'

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const location = useLocation()
    const mobile = isMobile()

    if (!mobile) {
        history.replaceState(null, '', '/')
        return <Home/>
    }

    if (mobile && !location.pathname.startsWith('/mobile')) {
        history.replaceState(null, '', '/mobile')
        return <MobileHome/>
    }

    return props.children
}

export default Index;