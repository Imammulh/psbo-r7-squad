import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const [form] = Form.useForm();

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={onChange}>Tampilkan Password</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary">
          <Link to="/">Submit</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
