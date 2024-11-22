import {ReactElement, useEffect} from 'react';
import {useAppSelector} from "@store/Index";
import {isMobile} from "@utils/loginMethod";
import Back from "@pages/Back";

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
                homePath: '/mobile'
            }
        }
        return {
            homePath: '/'
        }
    }

    if (!token) {
        return <Back/>
    }

    return props.children
}

export default Index;