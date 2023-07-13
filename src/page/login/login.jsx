import { Button, Checkbox, Form, Input, Card, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [api, contextHolder] = notification.useNotification();
    const [clickBtn, setClickbtn] = useState(false);
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const openNotificationWithIcon = (type, message, description) => {
        api[type]({
            message: [message],
            description: [description],
            onClose: () => {
                if (type == "success") {
                    navigate("/dashboard");
                }
            }
        });
    };

    const onFinish = (values) => {
        setClickbtn(true);

        axios({
            method: 'post',
            url: 'https://dummyjson.com/auth/login',
            data: {
                username: values.username,
                password: values.password,
            }
        }).then((response) => {
            if (response.status == 200) {
                localStorage.setItem('username', values.username);
                localStorage.setItem('password', values.password);
                
                openNotificationWithIcon('success', 'Welcome', response.data.firstName + ' ' + response.data.lastName + ' logged in.')
            }
        }).catch((error) => {
            openNotificationWithIcon("error", "Error", error.response.data.message)
        });

        setClickbtn(false);
    }

    const onReset = () => {
        form.setFieldsValue({
            username: "",
            password: "",
            remember: true,
        })
    }

    return (
        <Card>
            {contextHolder}

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