import React, { useEffect } from 'react';
import '../style/SignUp.css';

import { useNavigate } from 'react-router-dom';

import { validatePassword } from '../../../constant/auth/authValidation';
import { ICONS } from '../../../assets/icons/index';
import useToggle from '../../../hooks/useToggle';

import { Form } from 'antd';

import { Button } from '../../../components/form/Button/Button';
import Label from '../../../components/form/label/label';
import { Input } from '../../../components/form/Input/Input';

import { resetPassword, passwordLinkValidate } from '../api/Api';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateToggleToast } from '../../../reduxToolkit/appSlice';
import { updateResetPasswordEmail } from '../../../reduxToolkit/authSlice';

const button = {
  margin: '25px 0 15px 0',
};

const input = {
  width: '60%',
};

const passwordRules = [{ validator: validatePassword }];
const confirmPasswordRules = [
  {
    required: true,
    message: 'Password is required',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('These passwords didn’t match. Try again'));
    },
  }),
];

function ResetPassword() {
  const [value, toggleValue] = useToggle(false);

  const dispatch = useAspDispatch();
  const { toggleToast } = useAspSelector((state) => state.app);

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const TOKEN = window.location.search?.split('token=')[1];

  useEffect(() => {
    toggleValue(true);
    passwordLinkValidate(TOKEN).then((res) => {
      passwordLinkValidateResponse(res);
    });
  }, []);

  const passwordLinkValidateResponse = (res) => {
    toggleValue(false);
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
      dispatch(updateResetPasswordEmail(res?.data?.email));
    } else {
      navigate('/404');
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

  const onFinish = (values) => {
    const payLoad = {
      token: TOKEN,
      password: values?.password,
      password_confirmation: values?.reEnterPassword,
    };
    toggleValue(true);
    resetPassword(payLoad).then((res) => {
      resetPasswordResponse(res);
    });
  };

  const resetPasswordResponse = (res) => {
    toggleValue(false);
    form.setFieldsValue({
      password: '',
      reEnterPassword: '',
    });
    if (res?.status === 200) {
      navigate('/login');
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
      <span style={{ marginTop: '25px' }} />
      <Form
        onFinish={onFinish}
        form={form}
        className='step2Wrapper'>
        <div className='w-60'>
          <Label
            title='New Password'
            required
          />
        </div>
        <Form.Item
          name='password'
          style={input}
          rules={passwordRules}>
          <Input
            type='password'
            iconPrefix={ICONS.passwordLock}
            iconSuffixPassword={ICONS.passwordEyeOpen}
            placeholder='password'
          />
        </Form.Item>
        <span style={{ marginBottom: '20px' }} />

        <div className='w-60'>
          <Label
            title='Re-enter Password'
            required
          />
        </div>
        <Form.Item
          name='reEnterPassword'
          style={input}
          rules={confirmPasswordRules}>
          <Input
            type='password'
            iconPrefix={ICONS.passwordLock}
            iconSuffixPassword={ICONS.passwordEyeOpen}
            placeholder='password'
          />
        </Form.Item>

        <Button
          size='large'
          type='submit'
          loading={value}
          disabled={value}
          label={`Reset Password`}
          style={button}
        />
      </Form>
    </>
  );
}

export default ResetPassword;
