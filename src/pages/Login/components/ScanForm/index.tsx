import React from 'react';
import myCss from './index.module.less'
import {Button, Flex, Image} from "antd";

function Index() {
    function downApp() {
        const url = 'https://arena.oss.r0csgo.com:9001/client/m/r0_esport_v1.0.9.apk'
        window.open(url);
    }

    return (
        <Flex vertical align={'center'} className={myCss.container}>
            <Image src={'https://pic.baike.soso.com/p/20130307/20130307133541-2131676630.jpg'} preview={false}
                   width={200}/>
            <p>
                使用 R0 APP 扫码登录
                <Button type={'link'} onClick={downApp}> 点击下载APP</Button>
            </p>
        </Flex>
    );
}

export default Index;