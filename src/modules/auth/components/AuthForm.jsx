import React, { useEffect, useState } from 'react';
import '../style/SignUp.css';
import '../style/AuthForm.css';

import { useLocation, useNavigate } from 'react-router-dom';

import { ICONS } from '../../../assets/icons/index';
import useToggle from '../../../hooks/useToggle';

import { Checkbox, Form } from 'antd';

import Google from '../../../components/commonComponents/Google/Google';
import { Button } from '../../../components/form/Button/Button';
import { Input } from '../../../components/form/Input/Input';
import Label from '../../../components/form/label/label';
import MidTileDivider from '../../../components/commonComponents/divider/midTitleDivider';
import { validatePassword } from '../../../constant/auth/authValidation';
import updateToken from '../../../api/updateToken';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateSignUpSteps, updateAuthToken } from '../../../reduxToolkit/authSlice';
import {
  updateToggleToast,
  updateCurrentUser,
  updateGlobalLoader,
} from '../../../reduxToolkit/appSlice';

import { Login, SignUp } from '../api/Api';
import { currentUserDetails } from '../../../api/Api';

//style
const inputWidth = {
  width: '100%',
};
const mainContent = {
  width: '55%',
};

// inputRules
const emailRules = [
  {
    required: true,
    message: 'Email is required',
  },
  { type: 'email', message: 'Enter valid email address' },
];
const passwordRules = [{ validator: validatePassword }];

function AuthForm() {
  const [value, toggleValue] = useToggle(false);

  const dispatch = useAspDispatch();
  const { signUp } = useAspSelector((state) => state.authentication);
  const { toggleToast } = useAspSelector((state) => state.app);

  const [form] = Form.useForm();

  const navigate = useNavigate();
  let { pathname } = useLocation();

  //styles
  const button = {
    margin: '25px 0 15px 0',
    width: pathname === '/login' ? '21%' : '',
  };

  useEffect(() => {
    if (signUp?.step === 1 && signUp?.email !== '' && signUp?.password !== '') {
      form.setFieldsValue({
        Email: signUp?.email,
        password: signUp?.password,
        termsAndService: signUp?.termsAndService,
      });
    }
  }, [signUp?.step]);

  useEffect(() => {
    pathname === '/login' && localStorage.removeItem('authToken');
    dispatch(updateGlobalLoader(false));
  }, [pathname]);

  const onFinish = (values) => {
    if (pathname === '/login') {
      const payLoad = {
        email: values?.Email,
        password: values?.password,
      };
      toggleValue(true);
      Login(payLoad).then((res) => {
        loginResponseUpdate(res);
      });
    } else if (pathname === '/signup') {
      const payLoad = {
        email: values?.Email,
        password: values?.password,
        identity: signUp?.professionalIdentity,
      };
      toggleValue(true);
      SignUp(payLoad).then((res) => {
        signUpResponseUpdate(res, values);
      });
    }
  };

  const signUpResponseUpdate = (res, values) => {
    toggleValue(false);
    if (res?.status === 200) {
      dispatch(
        updateSignUpSteps({
          ...signUp,
          email: values?.Email,
          password: values?.password,
          termsAndService: values?.termsAndService ? values?.termsAndService : false,
          step: 2,
        }),
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

  const loginResponseUpdate = (res) => {
    toggleValue(false);
    if (res?.status === 200) {
      localStorage.setItem('authToken', res?.data?.auth_token);
      updateToken(res?.data?.auth_token);
      dispatch(updateAuthToken(res?.data?.auth_token));
      setTimeout(() => {
        currentUserDetails().then((res) => {
          if (res?.status === 200) {
            dispatch(updateCurrentUser(res?.data));
          }
        });
      }, 1000);
      navigate('/user/home/overview');
      dispatch(
        updateToggleToast([
          ...toggleToast,
          {
            id: toggleToast?.length + 1,
            content: 'Login Successfully',
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
    <div className='step2Wrapper'>
      <Google />
      <MidTileDivider
        title='or'
        width={pathname === '/login' ? '25%' : '23%'}
      />
      <Form
        onFinish={onFinish}
        className='step2Wrapper-form'
        form={form}
        autoComplete='off'>
        <div style={mainContent}>
          <Label
            title={pathname === '/login' ? 'Email Address' : 'Email'}
            required
          />
          <Form.Item
            name='Email'
            style={inputWidth}
            rules={emailRules}>
            <Input
              iconPrefix={ICONS.emailBox}
              placeholder={pathname === '/login' ? 'Enter email' : 'ex:- yourmail@email.com'}
            />
          </Form.Item>
          <div style={{ marginTop: '20px' }} />
          <Label
            title='Password'
            required
          />
          <Form.Item
            name='password'
            style={inputWidth}
            rules={passwordRules}>
            <Input
              iconPrefix={ICONS.passwordLock}
              iconSuffixPassword={ICONS.passwordEyeOpen}
              type='password'
              placeholder={pathname === '/login' ? 'Password' : 'password'}
            />
          </Form.Item>

          {pathname === '/login' ? (
            <div
              className='forgotPassword'
              onClick={() => navigate('/forgot-password')}>
              Forgot Password?
            </div>
          ) : (
            <Form.Item
              name='termsAndService'
              valuePropName='checked'>
              <Checkbox style={{ marginTop: '10px' }}>
                <span className='checkboxContent'>
                  By signing up, I accept the Gogrowx terms of service & privacy notice.
                </span>
              </Checkbox>
            </Form.Item>
          )}
        </div>
        <Button
          size='large'
          type='submit'
          width={'100%'}
          loading={value}
          disabled={value}
          label={pathname === '/login' ? 'Login' : `Create Account`}
          style={button}
        />
      </Form>
    </div>
  );
}

export default AuthForm;
