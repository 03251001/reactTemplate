import {Button, Flex, Form, Input, message} from "antd";
import {isMobile} from "@utils/loginMethod";
import {updateR0PwdApi} from "@api/user.ts";

function Index() {
    const mobile = isMobile()
    const [form] = Form.useForm<FieldType.updatePwd>()

    function onFinish() {
        form?.validateFields().then(values=>{
            updateR0PwdApi(values).then(res => {
                if (res.code === 200) {
                    message.success('修改密码成功')
                    form.resetFields()
                    history.back()
                }
            })
        })
    }

    return (
        <Flex align={'center'} vertical className={`formWrapper ${mobile && 'mobile'}`}>
            <h2 className={'title'}>修改密码</h2>

            <Flex className={'formBox'}>
                <Form
                    layout="vertical"
                    form={form}
                    name="mobileChange"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType.updatePwd>
                        label="旧密码"
                        name="oldPwd"
                        rules={[{required: true}]}
                    >
                        <Input.Password size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType.updatePwd>
                        label="新密码"
                        name="newPwd"
                        rules={[{required: true}]}
                    >
                        <Input.Password size={'large'}/>
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