import {Flex} from 'antd';
import React from 'react';
import myCss from './index.module.less'

interface Props{
    mobile:boolean
}

function Index(props:Props) {
    return (
        <Flex justify={'center'} vertical align={'center'} className={`${myCss.container} ${props.mobile && myCss.mobile}`}>
            <p>R0对战平台 | 2024 © Powered By 江老</p>
            <p>商务：business@r0csgo.com 联系方式：19310596660</p>
        </Flex>
    );
}

export default Index;