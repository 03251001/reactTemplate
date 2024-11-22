import {Flex, Image} from "antd";
import empty from '@assets/empty.png'
import {isMobile} from "@utils/loginMethod";
import {useEffect} from "react";
import myCss from './index.module.less'

function Index() {
    const mobile = isMobile()

    const getConfig = () => {
        if (mobile) {
            return {
                homePath: '/mobile'
            }
        }
        return {
            homePath: '/'
        }
    }

    useEffect(() => {
        setTimeout(() => {
            const config = getConfig()
            window.location.href = config?.homePath
        }, 3000)
    }, []);


    return (
        <Flex vertical align={'center'} justify={'center'} className={myCss.container}>
            <Image src={empty} preview={false} width={mobile?'90vw':'500px'}/>
            <h4>即将回到主页</h4>
        </Flex>
    );
}

export default Index;