import React, { useEffect } from 'react';
import '../style/SignUp.css';

import { useNavigate } from 'react-router-dom';

import { ICONS } from '../../../assets/icons/index';
import useTimerCount from '../../../hooks/useTimerCount';
import useToggle from '../../../hooks/useToggle';

import { Form } from 'antd';

import { Input } from '../../../components/form/Input/Input';
import { Button } from '../../../components/form/Button/Button';
import updateToken from '../../../api/updateToken';

import { otpValidate, SignUp } from '../api/Api';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateSignUpSteps } from '../../../reduxToolkit/authSlice';
import { updateToggleToast } from '../../../reduxToolkit/appSlice';

const button = {
  margin: '25px 0 15px 0',
  width: '20%',
};

function Step3() {
  const [value, toggleValue] = useToggle(false);
  const [remainingMinutes, remainingSeconds, setRemainingMinutes, setRemainingSeconds] =
    useTimerCount(2, 0);

  const dispatch = useAspDispatch();
  const { signUp } = useAspSelector((state) => state.authentication);
  const { toggleToast } = useAspSelector((state) => state.app);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (signUp?.step === 2 && signUp?.verifyCode !== '') {
      form.setFieldsValue({
        code: signUp?.verifyCode,
      });
    }
  }, [signUp?.step]);

  const sendCode = (values) => {
    dispatch(
      updateSignUpSteps({
        ...signUp,
        verifyCode: values?.code,
      }),
    );
    const payLoad = {
      email: signUp?.email,
      otp: values?.code,
    };
    toggleValue(true);
    otpValidate(payLoad).then((res) => {
      otpValidateUpdate(res);
    });
  };

  const otpValidateUpdate = (res) => {
    toggleValue(false);
    if (res?.status === 200) {
      // console.log('otpValidate', res?.data?.message);
      localStorage.setItem('authToken', res?.data?.auth_token);
      updateToken(res?.data?.auth_token);
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
      // console.log('error', res);
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

  const resend = () => {
    if (remainingMinutes === 0 && remainingSeconds === 0) {
      setRemainingMinutes(2);
      setRemainingSeconds(0);
      const payLoad = {
        email: signUp?.email,
        password: signUp?.password,
        identity: signUp?.professionalIdentity,
      };
      SignUp(payLoad).then((res) => {
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
      });
    }
  };

  const validateSixDigitNumber = (_, value) => {
    if (!value || /^[0-9]{6}$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Please enter a 6-digit number'));
  };

  return (
    <>
      <p className='step3Sentence'>We have sent a code to verify your email</p>
      <h3 className='step3Email'>
        {`${signUp?.email?.slice(0, 2)}***@***.${signUp?.email?.split('.')[1]}`}
      </h3>
      <div style={{ marginTop: '20px' }} />
      <Form
        onFinish={sendCode}
        form={form}
        className='step2Wrapper'
        autoComplete='off'>
        <Form.Item
          name='code'
          style={{ width: '55%' }}
          rules={[
            {
              required: true,
              message: 'Please input your code!',
            },
            {
              validator: validateSixDigitNumber,
            },
          ]}>
          <Input
            placeholder={`Enter code`}
            iconPrefix={ICONS.code}
          />
        </Form.Item>
        <div className='redirect'>
          <span
            className='text '
            onClick={() =>
              dispatch(
                updateSignUpSteps({
                  ...signUp,
                  step: 1,
                }),
              )
            }>
            Change Email?
          </span>
          <div className='timing '>
            <p>
              {`${remainingMinutes}:`}
              {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            </p>
            {remainingMinutes === 0 && remainingSeconds === 0 ? (
              <span
                className=' textGreen'
                onClick={() => resend()}>
                Resend code?
              </span>
            ) : (
              <span className='text '>Resend code?</span>
            )}
          </div>
        </div>
        <Button
          type='submit'
          loading={value}
          disabled={value}
          label={`Confirm`}
          size='large'
          style={button}
        />
      </Form>
    </>
  );
}

export default Step3;
