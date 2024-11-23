import {Button, Flex, Form, Input} from "antd";
import {FieldType} from "@type/user/changeMobile/interface.ts";
import {validCode, validPhone} from "@type/user/valid";
import Code from "@comps/Code";
import {isMobile} from "@utils/loginMethod";

function Index() {
    const mobile = isMobile()
    const [form] = Form.useForm()

    function onFinish() {

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
                    <Form.Item<FieldType>
                        label="手机号"
                        name="phone"
                        required={true}
                        rules={[{validator: validPhone}]}
                    >
                        <Input size={'large'}/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="验证码"
                        name="code"
                        required={true}
                        rules={[{validator: validCode}]}
                    >
                        <Input size={'large'} suffix={<Code form={form}/>}/>
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