import React, {useCallback} from 'react';
import myCss from './index.module.less'
import {Affix, Flex, Image} from "antd";
import {useAppDispatch, useAppSelector} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";
import {isMobile} from "@utils/loginMethod";
import LoginModal from '@pages/Login/PcLogin'
import {useNavigate} from "react-router-dom";

interface Props {
    mobile: boolean
}

function Index(props: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const mobile = isMobile()

    const {
        token,
        userInfo
    } = useAppSelector(state => state.UserSlice)

    /**
     * 退出登录
     */
    function outLoginHandler() {

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

    return (
        <Affix offsetTop={0.1}>
          <Flex  className={`${myCss.container} ${props.mobile && myCss.mobile}`}>
              <Flex className={myCss.inner} justify={'space-between'}
                    align={'center'}>
                  <Image
                      src={'https://r0csgo.com/logo1.png'}
                      className={myCss.img}
                      preview={false}
                  />

                  <Flex align={'center'} gap={10}>

                      {
                          userInfo?.name && (
                              <div>
                                  {userInfo?.name}
                              </div>
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