import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import type { FormProps } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
type FieldType = {
  username?: string;
  password?: string;
  password2?: string;
  mail?: string;
  remember?: string;
};

const LoginScreen = () => {
    const emailDemo = "zxc@gmail.com";
    const passwordDemo = "123456";
    const [valueEmail, setValueEmail] = useState("");
    const [valuePass, setValuePass] = useState("");
const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    };
   
    const handleSubmit = () => { 
        if (emailDemo === valueEmail && passwordDemo === valuePass) {
            console.log("Login success");
             navigate("/home");
        } else {
            console.log("Login failed");
        }
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div
      className="flex  bg-cover bg-center w-screen h-screen"
      style={{ backgroundImage: `url('/bg1.png')` }}
    >
      <div className="flex flex-col gap-4 mx-auto items-center justify-center w-[40%]  ">
        <div className="flex flex-row text-white items-center justify-center font-bold text-2xl gap-4">
          <img src="/hihihi.png" alt="logo" className="w-10 h-10" />
          <h1>Wind Store</h1>
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="bg-[#f8f7f7] p-6 rounded-lg w-[50%] "
        >
          <h1 className="text-black text-center pb-10 font-bold text-2xl">
            Login
          </h1>

          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input onChange={(e) => setValueEmail(e.target.value)} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password onChange={(e) => setValuePass(e.target.value)} />
          </Form.Item>

          {isSignUp ? (
            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          ) : (
            <>
              <Form.Item<FieldType>
                label="Re-enter password"
                name="password2"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item<FieldType>
                label="Email"
                name="mail"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
                          className="w-full p-6 font-semibold text-lg mb-2"
                          onClick={handleSubmit}
            >
              Submit
            </Button>
            <div className="flex gap-1">
              {isSignUp ? (
                <p>Already have an account?</p>
              ) : (
                <p>Don't have an account?</p>
              )}
              <button
                onClick={handleSignUp}
                className="text-blue-400 hover:text-blue-700"
              >
                {isSignUp ? <p>Sign Up</p> : <p>Sign In</p>}
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginScreen;
