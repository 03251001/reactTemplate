import React, {useEffect, useState} from 'react';
import myCss from './index.module.less'
import Icons from "@comps/Icons";
import {Avatar, Button, Flex} from "antd";

const btnText = {
    'success': '立即登录',
    'loading': '检测中',
    'error': '检测本机Steam',
}

const descText = {
    'success': '',
    'loading': '正在检测Steam登录',
    'error': '登录Steam或蒸汽平台',
}

type Status = 'success' | 'loading' | 'error'

const InitSteamInfo = {
    avatar: '',
    name: ''
}

function Index() {
    const [loading, setLoading] = useState(false)
    const [steamInfo, setSteamInfo] = useState(InitSteamInfo)
    const [status, setStatus] = useState<Status>('success')


    function fetchSteamInfo() {
        setLoading(true)
        setStatus('loading')
        setTimeout(() => {
            const flag = true
            if (flag) {
                setSteamInfo({
                    avatar: 'https://r0csgo.com/logo1.png',
                    name: '小栗子1001'
                })
                setStatus('success')
            } else {
                setStatus('error')
            }

            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        fetchSteamInfo()
        return ()=>{
            setSteamInfo(InitSteamInfo)
        }
    }, [])


    return (
        <div className={myCss.container}>
            <Flex justify={'center'} align={'center'} vertical className={myCss.top}>

                {
                    steamInfo?.avatar ? (
                        <Avatar src={'https://r0csgo.com/logo1.png'} size={50}/>
                    ) : (
                        <Icons type={'r-steam1'} size={50} color={'#505153'}/>
                    )
                }
                <p>
                    {
                        steamInfo?.name ? (
                            steamInfo?.name
                        ) : (
                            descText[status]
                        )
                    }
                </p>

                {
                    status == 'error' && (
                        <Flex className={myCss.error}>
                            Steam账号未登录，请确Steam在线后重试
                        </Flex>
                    )
                }
            </Flex>



            <Button type={'primary'} loading={loading} size={'large'} style={{width: '100%'}}>
                {btnText[status]}
            </Button>

        </div>
    );
}

export default Index;