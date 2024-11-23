import {ReactElement} from 'react';
import {isMobile} from "@utils/loginMethod";
import Back from "@pages/Back";

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const mobile = isMobile()
    if (mobile) return <Back/>
    return props.children
}

export default Index;