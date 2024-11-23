import {Button, Flex, Form, Input} from "antd";
import {LoginFieldType} from "@type/user/interface.ts";
import React, {useState} from "react";
import Code from "@comps/Code";
import {validCode, validPhone} from "@type/user/valid";
import {useAppDispatch} from "@store/Index";
import {fetchLoginByPhone} from "@slice/UserSlice/extra.ts";
import {isMobile} from "@utils/loginMethod";

/**
 * 手机号登录
 * @constructor
 */


function Index() {
    const dispatch = useAppDispatch();
    const mobile = isMobile()

    const [loading, setLoading] = useState<boolean>(false);
    const [form] = Form.useForm<LoginFieldType.phone>()

    function onFinish() {
        form.validateFields().then(value => {
            setLoading(true)
            dispatch(fetchLoginByPhone(value)).finally(() => setLoading(false))
        });
    }


    function onFinishFailed() {

    }


    return (
        <Form
            form={form}
            name="phoneForm"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout={'vertical'}
        >
            <Form.Item<LoginFieldType.phone>
                label={mobile ? '' : '手机号'}
                name="phone"
                required={true}
                rules={[{validator: validPhone}]}
            >
                <Input size={'large'} placeholder={'手机号'}/>
            </Form.Item>

            <Form.Item<LoginFieldType.phone>
                label={mobile ? '' : '验证码'}
                name="code"
                required={true}
                rules={[{validator: validCode}]}
            >
                <Input size={'large'} placeholder={'验证码'} suffix={<Code form={form}/>}/>
            </Form.Item>
            <Form.Item<LoginFieldType.phone>>
                <Flex justify={'center'}>
                    <Button
                        type={'primary'}
                        loading={loading}
                        onClick={onFinish}
                        size={'large'}
                        style={{width: '100%'}}>
                        登录
                    </Button>
                </Flex>
            </Form.Item>
        </Form>
    );
}

export default Index;