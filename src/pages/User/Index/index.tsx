import React from 'react';
import myCss from './index.module.less'
import Card from "@pages/User/components/Card";
import {Flex} from "antd";
import {isMobile} from "@utils/loginMethod";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";
import Footer from "@pages/Home/components/Footer";
import {getChangeSteamLinkApi} from "@api/user.ts";
import {RouterPath} from "@/routes/routerPath.ts";
import {initialState} from "@slice/UserSlice/interface.ts";

function Index() {
    const mobile = isMobile()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const routerPath = RouterPath()

    const {
        userInfo
    } = useAppSelector(state => state.UserSlice || initialState)

    function changeAccount() {
        if (mobile) {
            navigate(routerPath.mobileLogin)
        } else {
            dispatch(updateLoginModal(true))
        }
    }

    function changPhone() {
        navigate(routerPath.changPhoneNumber)
    }

    function updatePwd() {
        navigate(routerPath.updatePwd)
    }

    function changeSteam() {
        getChangeSteamLinkApi().then(res => {
            if (res.code == 200) {
                window.open(res.data, '_blank', 'location=no')


            }
        })
    }

    function resetPwd() {
        navigate(routerPath.resetPwd)
    }

    return (
        <Flex className={myCss.container} justify={'space-between'} vertical align={'center'}>
            <Flex
                gap={10}
                vertical
                justify={'center'}
                align={'center'}
                className={myCss.inner}
            >
                <Card
                    src={'https://arena.oss.r0csgo.com:9001/group_avatar/default.png'}
                    label={userInfo?.username || 'R0用户'}
                    right={'切换账号'}
                    onClick={changeAccount}
                />

                <Card
                    src={'r-phone-circle'}
                    label={'更换手机号'}
                    right={'去更换'}
                    onClick={changPhone}
                />

                <Card
                    src={'r-pwd-circle'}
                    label={'修改平台密码'}
                    right={'去修改'}
                    onClick={updatePwd}
                />

                <Card
                    src={'r-steam-circle'}
                    label={'Steam换绑'}
                    right={'去换绑'}
                    onClick={changeSteam}
                />

                <Card
                    src={'r-reset'}
                    label={'重置密码'}
                    right={'去设置'}
                    onClick={resetPwd}
                />
            </Flex>

            <Footer mobile={mobile}/>
        </Flex>
    );
}

export default Index;