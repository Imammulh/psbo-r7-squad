import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [form] = Form.useForm();

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form form={form} layout='vertical'>
      <Form.Item label='E-mail IPB' required>
        <Input placeholder='input placeholder' />
      </Form.Item>
      <Form.Item label='Password' required>
        <Input placeholder='input placeholder' />
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={onChange}>Tampilkan Password</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type='primary'>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
