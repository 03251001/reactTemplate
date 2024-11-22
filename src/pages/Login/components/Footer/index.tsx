import React, {useCallback, useEffect} from 'react';
import {Flex} from "antd";
import myCss from './index.module.less'
import _ from 'lodash'

export type LoginMethod = 'phone' | 'steam' | 'scan'

interface Props {
    method: LoginMethod
    steamHandler: () => void
    scanHandler: () => void
    phoneHandler: () => void
}


function Index(props: Props) {
    const List = [
        {label: 'Steam登录', event: props.steamHandler, key: 'steam'},
        {label: '扫码登录', event: props.scanHandler, key: 'scan'},
        {label: '手机号登录', event: props.phoneHandler, key: 'phone'},
    ]

    const Methods = useCallback(() => {
        const result = List.filter(item => item.key !== props.method)
        return result?.map((item, key) => {
            return (
                <Flex gap={20} key={key}>
                    <p onClick={item.event}>{item.label}</p>
                    {
                        key !== _.size(result) - 1 && <p>|</p>
                    }
                </Flex>
            )
        })
    }, [props.method])

    useEffect(() => {
    }, [])

    return (
        <Flex vertical className={myCss.container}>
            <div className={myCss.line}/>

            <Flex align={'center'} gap={20} justify={'center'}>
                {Methods()}
            </Flex>
        </Flex>
    );
}

export default Index;