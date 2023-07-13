import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useState } from 'react';

function Login() {
    const[clickBtn, setClickbtn] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        setClickbtn(true)
        setClickbtn(false)
    }

    const onReset = () => {
        form.setFieldsValue({
            username: "",
            password: "",
            remember: true
        })
    }

    return (
        <Card>
            <img
                width={50}
                src="/images.png"
            />

            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                    username: "kminchelle",
                    password: "0lelplR"
                }}
                onFinish={onFinish}
                autoComplete="off"
            >

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className='submitBtn'
                        disabled={clickBtn}
                    >
                        Submit
                    </Button>

                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login;