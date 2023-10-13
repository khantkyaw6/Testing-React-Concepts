import React from "react";
import { Button, Divider, Form, Input, Typography, message } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const LoginForm = () => {
  const login = () => {
    message.success("Login Success");
  };

  const onFinish = (success) => {
    console.log("Login Success", success);
  };

  const onFinishFailed = (error) => {
    console.log("Login Failed", error);
  };

  return (
    <div className="appBg">
      <Form
        className="loginForm"
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Typography.Title>Login</Typography.Title>
        <Form.Item
          label="Email"
          name={"email"}
          rules={[
            {
              required: true,
              type: "email",
              message: "Please Enter valid email",
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"pwd"}
          rules={[
            {
              required: true,
              type: "password",
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Login
        </Button>

        <Divider style={{ borderColor: "#000" }}>or Login With</Divider>
        <div className="socialLogin">
          <GoogleOutlined
            className="socialIcon"
            onClick={login}
            style={{
              color: "#DB4437",
            }}
          />
          <FacebookFilled
            className="socialIcon"
            onClick={login}
            style={{
              color: "#3b5998",
            }}
          />
          <TwitterOutlined
            className="socialIcon"
            onClick={login}
            style={{
              color: "#1DA1F2",
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
