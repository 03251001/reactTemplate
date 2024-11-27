import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {Flex, Modal} from "antd";
import GoCaptcha from "go-captcha-react";
import _ from 'lodash'
import {useAppDispatch, useAppSelector} from "@store/Index";
import {fetchVerify} from "@slice/UserSlice/extra.ts";
import {updateVerifyInfo} from "@slice/UserSlice";
import Icons from "@comps/Icons";
import myCss from './index.module.less'
import {initialState} from "@slice/UserSlice/interface.ts";

interface RotateRef {
    reset: () => void;
    clear: () => void;
    refresh: () => void;
    close: () => void;
}

export interface VerifyRef {
    setCapVisible: React.Dispatch<React.SetStateAction<boolean>>,
    refreshVerify: () => void
}

interface Props {
    finish?: (angle: string) => Promise<boolean>
    targetBefore?: () => Promise<boolean>
}

const Index = forwardRef((props: Props, ref) => {
    useImperativeHandle((ref), () => {
        return {
            setCapVisible,
            refreshVerify,
        }
    })

    const dispatch = useAppDispatch();

    const {
        verifyInfo
    } = useAppSelector((state) => state.UserSlice||initialState)

    const [capVisible, setCapVisible] = useState(false)

    const [check, setCheck] = useState(false)

    const rotateRef = useRef<RotateRef>(null);

    const [rotateConfig, setRotateConfig] = useState({
        width: 300,
        height: 220,
        scope: true,
    })

    /**
     * 获取验证码
     */
    function refreshVerify() {
        dispatch(fetchVerify()).then(() => {
            setTimeout(() => {
                rotateRef?.current?.refresh()
            }, 1000)
        })
    }

    /**
     * 验证验证码
     */
    function checkVerify(point: string, reset: Function) {
        if (props?.finish) {
            props?.finish(point).then(res => {
                console.log(res)
                setCheck(true)

                setCapVisible(false)

                dispatch(updateVerifyInfo({
                    id: '',
                    imageBase64: '',
                    thumbBase64: ''
                }))

            }).catch(() => {
                reset()
            })
        }
    }

    async function clickTarget() {
        let flag = true
        if (props?.targetBefore) {
            flag = await props?.targetBefore()
        }
        if (!flag) return

        setCapVisible(true)
    }


    useEffect(() => {
        if (capVisible && _.isEmpty(verifyInfo?.id)) {
            refreshVerify()
        }
    }, [capVisible])

    return (
        <div className={myCss.container}>
            <Flex align={'center'} justify={'center'} gap={10} className={myCss.verifyTarget}
                  onClick={clickTarget}>
                {
                    !check && (
                        <Icons type={'r-circle'} size={20}/>
                    )
                }
                获取验证码
                {
                    check && (
                        <Icons type={'r-bingo'} size={20}/>
                    )
                }
            </Flex>
            <Modal
                open={capVisible}
                footer={null}
                width={'fit-content'}
                centered={true}
                closeIcon={false}
                rootClassName={'verifyRoot'}
            >
                <GoCaptcha.Rotate
                    data={{
                        angle: 20,
                        image: verifyInfo?.imageBase64 || '',
                        thumb: verifyInfo?.thumbBase64 || ''
                    }}
                    events={{
                        rotate(angle: number): void {
                        },
                        refresh(): void {
                            // setRotateData({...rotateData, image: clickImage2})
                        },
                        close(): void {
                            setCapVisible(false)
                        },
                        confirm(point: any, reset: Function): void { // 旋转完成
                            checkVerify(point, reset)
                        }
                    }}
                    config={rotateConfig}
                    ref={rotateRef}
                />
            </Modal>
        </div>
    )
})

export default Index;