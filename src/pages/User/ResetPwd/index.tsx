import {Button, Flex, Form, Input, message} from "antd";
import {resetPwdApi,} from "@api/user.ts";
import { validCode, validPhone} from "@type/user/valid";
import Code from "@comps/Code";
import _ from "lodash";

function Index() {
    const [form] = Form.useForm<FieldType.resetPwd>()

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
                    <Form.Item<FieldType.resetPwd>
                        label="新密码"
                        name="pwd"
                        required={true}
                        rules={[{required:true}]}
                    >
                        <Input.Password size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType.resetPwd>
                        label="确认密码"
                        name="again"
                        required={true}
                        rules={
                            [{
                                validator: (__, value, callback) => {
                                    if (_.isEmpty(value)) {
                                        return callback('请再次输入新密码')
                                    }
                                    const pwd = form.getFieldValue('pwd')

                                    if (pwd !== value) {
                                        return callback('密码不一致！')
                                    }

                                    return callback()
                                }
                            }]
                        }
                    >
                        <Input.Password size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType.resetPwd>
                        label="手机号"
                        name="phone"
                        required={true}
                        rules={[{validator: validPhone}]}
                    >
                        <Input size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType.resetPwd>
                        label="验证码"
                        name="code"
                        required={true}
                        rules={[{validator: validCode}]}
                    >
                        <Code form={form} type={'restCode'}/>
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