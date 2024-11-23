import React from 'react';
import myCss from './index.module.less'
import Card from "@pages/User/components/Card";
import {Flex} from "antd";
import {isMobile} from "@utils/loginMethod";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";
import Footer from "@pages/Home/components/Footer";

const Paths = {
    phone: {mobile: '/mobile/changPhoneNumber', web: '/changPhoneNumber'},
    pwd: {mobile: '/mobile/updatePwd', web: '/updatePwd'},
    steam: {mobile: '/mobile/changeSteamAccount', web: '/changeSteamAccount'},
}

function Index() {
    const mobile = isMobile()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const name = mobile ? 'mobile' : 'web'

    function changeAccount() {
        if (mobile) {
            navigate('/mobile/login')
        } else {
            dispatch(updateLoginModal(true))
        }
    }

    function changPhone() {
        navigate(Paths.phone[name])
    }

    function updatePwd() {
        navigate(Paths.pwd[name])
    }

    function changeSteam() {
        navigate(Paths.steam[name])
    }

    return (
        <Flex className={myCss.container} justify={'space-between'} vertical align={'center'}>
            <Flex
                gap={20}
                vertical
                justify={'center'}
                align={'center'}
                className={`${myCss.inner} ${mobile && myCss.mobile}`}
            >
                <Card
                    src={'https://pic2.zhimg.com/v2-b9d8d76aea50684749494d3983bb7671_r.jpg'}
                    label={'3104997676'}
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
            </Flex>

            <Footer mobile={mobile}/>
        </Flex>
    );
}

export default Index;