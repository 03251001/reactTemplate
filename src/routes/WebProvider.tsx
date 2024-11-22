import {ReactElement} from 'react';
import {isMobile} from "@utils/loginMethod";
import Back from "@pages/Back";

interface Props {
    children: ReactElement
}

function Index(props: Props) {
    const mobile = isMobile()
    if (mobile) {
        // setTimeout(()=>{
        //     window.location.href = '/mobile'
        // },3000)
        return <Back/>
    }
    return props.children
}

export default Index;