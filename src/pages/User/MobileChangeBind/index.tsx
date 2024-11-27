import {Button, Flex, Form, Input, message} from "antd";
import {validCode, validPhone} from "@type/user/valid";
import Code from "@comps/Code";
import {isMobile} from "@utils/loginMethod";
import {changePhoneApi} from "@api/user.ts";

function Index() {
    const mobile = isMobile()
    const [form] = Form.useForm<FieldType.mobileChange>()

    function onFinish() {
        form?.validateFields().then(values => {
            changePhoneApi(values).then(res => {
                if (res.code === 200) {
                    message.success('更换手机号成功')
                    form.resetFields()
                    history.back()

                }
            })
        })
    }

    return (
        <Flex align={'center'} vertical className={`formWrapper ${mobile && 'mobile'}`}>
            <h2 className={'title'}>更换手机号</h2>

            <Flex className={'formBox'}>
                <Form
                    layout="vertical"
                    form={form}
                    name="mobileChange"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType.mobileChange>
                        label="旧手机号"
                        name="oldPhone"
                        required={true}
                        rules={[{validator: validPhone}]}
                    >
                        <Input size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType.mobileChange>
                        label="新手机号"
                        name="phone"
                        required={true}
                        rules={[{validator: validPhone}]}
                    >
                        <Input size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType.mobileChange>
                        label="验证码"
                        name="code"
                        required={true}
                        rules={[{validator: validCode}]}
                    >

                        <Code form={form} type={'sendPhone'}/>

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