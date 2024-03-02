import React from 'react';
import '../style/SignUp.css';

import useToggle from '../../../hooks/useToggle';

import { Form } from 'antd';

import Label from '../../../components/form/label/label';
import { Input } from '../../../components/form/Input/Input';
import { Button } from '../../../components/form/Button/Button';

import { forgotPassword } from '../api/Api';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateToggleToast } from '../../../reduxToolkit/appSlice';

const button = {
  margin: '25px 0 15px 0',
};

const emailRules = [
  {
    required: true,
    message: 'Email is required',
  },
];

function ForgotPassword() {
  const [value, toggleValue] = useToggle(false);

  const dispatch = useAspDispatch();
  const { toggleToast } = useAspSelector((state) => state.app);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const payLoad = { email: values?.Email };
    toggleValue(true);
    forgotPassword(payLoad).then((res) => {
      forgotPasswordResponseUpdate(res);
    });
  };

  const forgotPasswordResponseUpdate = (res) => {
    toggleValue(false);
    form.setFieldsValue({ Email: '' });
    if (res?.status === 200) {
      dispatch(
        updateToggleToast([
          ...toggleToast,
          {
            id: toggleToast?.length + 1,
            content: res?.data?.message,
            status: 'Success',
            duration: '',
          },
        ]),
      );
    } else {
      dispatch(
        updateToggleToast([
          ...toggleToast,
          {
            id: toggleToast?.length + 1,
            content: res?.response?.data?.error,
            status: 'Error',
            duration: '',
          },
        ]),
      );
    }
  };
  return (
    <>
      <span style={{ marginTop: '20px' }} />
      <Form
        onFinish={onFinish}
        form={form}
        autoComplete='off'
        className='step2Wrapper'>
        <div className='w-60'>
          <Label
            title='Enter your account email address'
            required
          />
        </div>

        <Form.Item
          name='Email'
          style={{ width: '60%' }}
          rules={emailRules}>
          <Input placeholder='Enter email' />
        </Form.Item>

        <Button
          size='large'
          htmlType='submit'
          loading={value}
          disabled={value}
          label={`Send Reset Link`}
          style={button}
        />
      </Form>
    </>
  );
}

export default ForgotPassword;
