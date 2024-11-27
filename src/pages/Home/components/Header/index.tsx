import React from 'react';
import myCss from './index.module.less'
import {Affix, Flex, Image, message} from "antd";
import {useAppDispatch, useAppSelector} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";
import {isMobile} from "@utils/loginMethod";
import LoginModal from '@pages/Login/PcLogin'
import {useNavigate} from "react-router-dom";
import {fetchLoginOut} from "@slice/UserSlice/extra.ts";
import {RouterPath} from '@/routes/routerPath.ts'
import {initialState} from "@slice/UserSlice/interface.ts";

interface Props {
    mobile: boolean
}

function Index(props: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const mobile = isMobile()
    const routerPath = RouterPath()


    const {
        token,
        userInfo
    } = useAppSelector(state => state.UserSlice || initialState)

    /**
     * 退出登录
     */
    function outLoginHandler() {
        dispatch(fetchLoginOut()).then(action => {
            if (action?.payload) {
                message.success('账号已退出')
                const path = RouterPath()
                window.location.href = path?.home
            }
        })
    }

    /**
     * 点击登录
     */
    function loginHandler() {
        if (mobile) {
            navigate('/mobile/login')
        } else {
            dispatch(updateLoginModal(true))
        }
    }

    function toCenter() {
        navigate(routerPath?.center)
    }

    function toHome(){
        navigate(routerPath.home)
    }

    return (
        <Affix offsetTop={0.1}>
            <Flex className={myCss.container}>
                <Flex className={myCss.inner} justify={'space-between'}
                      align={'center'}>
                    <Image
                        src={'https://r0csgo.com/logo1.png'}
                        className={myCss.img}
                        preview={false}
                        onClick={toHome}
                    />

                    <Flex align={'center'} gap={20}>
                        {
                            token && userInfo?.username && location.pathname !== routerPath?.center ? (
                                <div onClick={toCenter} className={myCss.name}>
                                    {userInfo?.username}
                                </div>
                            ) : (
                                <></>
                            )
                        }

                        {
                            token ? (
                                <div className={myCss.out} onClick={outLoginHandler}>
                                    退出
                                </div>
                            ) : (
                                <div className={myCss.login} onClick={loginHandler}>
                                    登录
                                </div>
                            )
                        }
                    </Flex>

                    <LoginModal/>
                </Flex>
            </Flex>
        </Affix>
    );
}

export default Index;