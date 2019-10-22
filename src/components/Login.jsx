import React, { useEffect, useState } from "react";

import { Form, Icon, Input, Button, Card, Alert } from "antd";
import { Link } from "react-router-dom";

const NormalLoginForm = ({ form, setAuthUser, error }) => {
  const [errorState, setErrorState] = useState(null);
  useEffect(() => {
    // async rendering
    setErrorState(error);
    return () => {
      setErrorState(null);
    };
  }, [error]);
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        setAuthUser(values);
      }
    });
  };
  const { getFieldDecorator } = form;
  return (
    <div className="app__login">
      <Card title="Login">
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          {error && <Alert message={errorState} type="error" />}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>{" "}
            or <Link to="/Register"> Register</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const LoginComponent = Form.create({ name: "normal_login" })(NormalLoginForm);
export default LoginComponent;
