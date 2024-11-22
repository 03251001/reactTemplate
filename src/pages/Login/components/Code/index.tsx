import React, {useEffect, useState} from 'react';
import {Button, FormInstance} from "antd";
import {SendCodeQApi} from "@api/login.ts";
import {LoginFieldType} from "@type/user/interface.ts";

interface Props {
    form: FormInstance<LoginFieldType.phone>
}

function Index(props: Props) {
    const [start, setStart] = useState(false)
    const [count, setCount] = useState(0)


    useEffect(() => {
        if (count > 0) {
            setTimeout(() => setCount(count - 1), 1000)
        } else {
            setStart(false)
        }
    }, [count])

    const startHandler = () => {
        if (start) return

        props.form.validateFields(['phone'])
            .then(values => {
                SendCodeQApi(values.phone)
                    .then(res => {
                        if (res.code === 200) {
                            setStart(true)
                            setCount(3)
                        }
                    })
            })
    }

    return (
        <Button disabled={start} type={'link'}
                onClick={startHandler}>{start ? `${count}秒后重新获取` : '获取验证码'}</Button>
    );
}

export default Index;