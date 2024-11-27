import React, {useEffect} from 'react';
import myCss from './index.module.less'
import Icons from "@comps/Icons";
import {Button, Flex} from "antd";
import {LoginSteamApi} from "@api/login.ts";
import _ from 'lodash'
import {useAppDispatch, useAppSelector} from "@store/Index";
import {updateSteamStatus, updateToken} from "@slice/UserSlice";
import {updateLoginModal} from "@slice/GlobalSlice";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "@/routes/routerPath.ts";
import {initialState} from "@slice/UserSlice/interface.ts";


const btnText = {
    '': '我已开启Steam加速器，开始登录',
    'success': '登录成功',
    'loading': '检测中',
    'error': '重新登录',
}

const descText = {
    '': 'Steam',
    'success': '登录成功',
    'loading': '正在检测Steam登录',
    'error': '登录Steam或蒸汽平台',
}

function Index(props: { link: boolean }) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        steamStatus
    } = useAppSelector(state => state.UserSlice || initialState)


    function fetchSteamInfo() {
        LoginSteamApi().then(res => {
            const flag = res?.code === 200
            if (flag) {
                dispatch(updateSteamStatus('loading'))
                const temp = window.open(res.data, '_blank', 'location=no')
                temp?.addEventListener('close', () => {
                    console.log('打开的steam登录窗口关闭了')
                    dispatch(updateSteamStatus(''))
                })
            }
        })
    }

    const db_steamLink = _.debounce(() => {
        fetchSteamInfo()
    }, 1500)


    useEffect(() => {
        if (!props.link) {

        }
    }, [props.link]);


    function listenStorage(e) {
        const value = e.newValue
        const data = value ? JSON.parse(value) : null
        if (data && data?.type === 'loginSteam') {
            dispatch(updateToken(data.token))
            dispatch(updateSteamStatus(data.status))

            if (data.status == 'success') {
                dispatch(updateLoginModal(false))
                const routerPath = RouterPath()
                navigate(routerPath.center)
            }
        }
    }

    useEffect(() => {
        window.addEventListener("storage", listenStorage)

        return () => {
            window.removeEventListener("storage", listenStorage)
        }
    }, []);

    return (
        !props.link ?
            <div className={myCss.container}>
                <Flex justify={'center'} align={'center'} vertical className={myCss.top}>
                    <Icons type={'r-steam1'} size={50} color={'#505153'}/>
                    <p>
                        {descText[steamStatus]}
                    </p>

                    {
                        steamStatus == 'error' && (
                            <Flex className={myCss.error}>
                                您登录的Steam账号未绑定R0平台账号
                            </Flex>
                        )
                    }

                </Flex>
                <p className={myCss.desc}>
                    如您未开启 <span>Steam加速器</span>，可能会导致Steam网站无法访问！
                </p>
                <Button type={'primary'} disabled={steamStatus === 'loading'} loading={steamStatus === 'loading'}
                        size={'large'} style={{width: '100%'}}
                        onClick={fetchSteamInfo}>
                    {btnText[steamStatus]}
                </Button>
            </div> : (
                <></>
            )
    );
}

export default Index;