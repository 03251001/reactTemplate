import {ReactElement} from 'react';
import {isMobile} from "@utils/loginMethod";
import MobileHome from '@pages/Home/Mobile'

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const mobile = isMobile()
    if (mobile) {
        history.replaceState(null, '', '/mobile')
        return <MobileHome/>
    }
    return props.children
}

export default Index;