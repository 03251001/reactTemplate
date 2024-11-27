import {Button, Flex, Form, Input, message} from "antd";
import {resetPwdApi,} from "@api/user.ts";
import {validCode, validPhone} from "@type/user/valid";
import Code from "@comps/Code";

function Index() {
    const [form] = Form.useForm<FieldType.phone>()

    function onFinish() {
        form?.validateFields().then(values => {
            resetPwdApi(values).then(res => {
                if (res.code === 200) {
                    message.success('重置密码成功')
                    form.resetFields()
                    history.back()
                }
            })
        })
    }

    return (
        <Flex align={'center'} vertical className={'formWrapper'}>
            <h2 className={'title'}>重置密码</h2>

            <Flex className={'formBox'}>
                <Form
                    layout="vertical"
                    form={form}
                    name="mobileChange"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType.phone>
                        label="手机号"
                        name="phone"
                        rules={[{validator: validPhone}]}
                    >
                        <Input size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType.phone>
                        label="验证码"
                        name="code"
                        rules={[{validator: validCode}]}
                    >
                        <Code form={form} loginCode={false} type={'restCode'}/>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button size={'large'} type="primary" htmlType="submit" className={'submitBtn'}>
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>

        </Flex>
    );
}

export default Index;