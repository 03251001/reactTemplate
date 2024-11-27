import {Button, Flex, Form, Input, message} from "antd";
import React, {useState} from "react";
import Code from "@comps/Code";
import {validCode, validPhone} from "@type/user/valid";
import {useAppDispatch, useAppSelector} from "@store/Index";
import {fetchLoginByPhone} from "@slice/UserSlice/extra.ts";
import {isMobile} from "@utils/loginMethod";
import {updateLoginModal} from "@slice/GlobalSlice";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "@/routes/routerPath.ts";
import {initialState} from "@slice/UserSlice/interface.ts";

/**
 * 手机号登录
 * @constructor
 */


function Index() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const mobile = isMobile()

    const {
        verifyInfo
    } = useAppSelector(state => state.UserSlice||initialState)

    const [loading, setLoading] = useState<boolean>(false);
    const [form] = Form.useForm<FieldType.phone>()

     function onFinish() {
        form.validateFields().then(value => {
            setLoading(true)
            dispatch(fetchLoginByPhone({...value, key: verifyInfo?.id})).then(action => {
                if (action.meta.requestStatus !== "rejected") {
                    message.success('登录成功')
                    dispatch(updateLoginModal(false))
                    const routerPath = RouterPath()
                    navigate(routerPath?.center)
                }
            }).finally(() => {
                setLoading(false)
            })
        });
    }

    return (
        <Form
            form={form}
            name="phoneForm"
            onFinish={onFinish}
            autoComplete="off"
            layout={'vertical'}
            initialValues={{
                phone:"15273034239"
            }}
        >
            <Form.Item<FieldType.phone>
                label={mobile ? '' : '手机号'}
                name="phone"
                required={true}
                rules={[{validator: validPhone}]}
            >
                <Input size={'large'} placeholder={'手机号'} allowClear={true}/>
            </Form.Item>

            <Form.Item<FieldType.phone>
                label={mobile ? '' : '验证码'}
                name="code"
                required={true}
                rules={[{validator: validCode}]}
            >

                <Code
                    form={form}
                    loginCode={true}
                    type={'4'}
                />

            </Form.Item>
            <Form.Item>
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