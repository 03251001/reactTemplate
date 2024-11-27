import React, {useEffect, useRef, useState} from 'react';
import {Button, FormInstance, Input} from "antd";
import Verify, {VerifyRef} from "@pages/Login/components/Verify";
import myCss from './index.module.less'
import {useAppDispatch, useAppSelector} from "@store/Index";
import {SendCodeParams, SendCodeType} from "@type/user/interface.ts";
import {fetchVerify} from "@slice/UserSlice/extra.ts";
import {initialState} from "@slice/UserSlice/interface.ts";
import {sendCodeByPhoneApi, sendCodeByResetApi} from "@api/user.ts";
import {SendCodeQApi} from "@api/login.ts";

interface Props {
    form: FormInstance<any>
    type: SendCodeType
}

const Api = {
    'sendPhone':sendCodeByPhoneApi,
    '4':SendCodeQApi,
    'restCode':sendCodeByResetApi,
}

function Index(props: Props) {

    const dispatch = useAppDispatch()

    const {
        verifyInfo
    } = useAppSelector(state => state.UserSlice || initialState)

    const verifyRef = useRef<VerifyRef>(null)

    const [isVerify, setIsVerify] = useState<boolean>(false)
    const [start, setStart] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count > 0) {
            setTimeout(() => setCount(count - 1), 1000)
        } else {
            setStart(false)
        }
    }, [count])

    function finish(angle: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            props.form.validateFields(['phone']).then((values) => {
                const data: SendCodeParams = {
                    phone: values.phone,
                    key: verifyInfo?.id,
                    code: props.type,
                    angle: angle + ''
                }
                Api[props.type](data).then(res => {
                    if (res.code === 200) {
                        setStart(true)
                        setCount(60)
                        setIsVerify(true)
                        resolve(true)
                    }
                }).catch(() => {
                    dispatch(fetchVerify())
                    reject(false)
                })
            })
        })
    }

    const targetBefore = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            props.form.validateFields(['phone']).then(value => {
                resolve(true)
            }).catch(() => {
                reject(false)
            })
        })
    }

    return (
        <div className={myCss.container}>
            <div className={myCss.son} style={{zIndex: isVerify ? 1 : -22}}>
                <Input
                    size={'large'}
                    placeholder={'验证码'}
                    allowClear={true}
                    suffix={
                        <Button
                            disabled={start}
                            type={'link'}
                            size={'small'}
                        >
                            {start ? `${count}秒后重新获取` : '获取验证码'}
                        </Button>
                    }
                    onChange={(v) => props.form.setFieldValue('code', v.target.value)}
                />
            </div>

            <div className={myCss.son} style={{zIndex: !isVerify ? 1 : -22}}>
                <Verify ref={verifyRef} finish={finish} targetBefore={targetBefore}/>
            </div>
        </div>
    );
}

export default Index;