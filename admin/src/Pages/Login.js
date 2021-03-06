import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Input, Icon, Button, Spin } from "antd";
import "../static/css/Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="Ayu Blog  System" bordered={true} style={{ width: 400 }}>
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={e => {
              setPassWord(e.target.value);
            }}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            {" "}
            Login in{" "}
          </Button>
        </Card>
      </Spin>
    </div>
  );
};

export default Login;
