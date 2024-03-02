import React, { useEffect } from 'react';
import '../../modules/auth/style/auth.css';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { images } from '../../assets/images/index';
import { Title } from '../../components/commonComponents/Title/Title';
import { Terms } from '../../components/commonComponents/Terms & Conditions/Terms';
import Steps from '../../modules/auth/components/HorizontalSteps';
import Divider from '../../components/commonComponents/divider/Divider';

import { useAspSelector, useAspDispatch } from '../../test/jest-redux-hooks';
import { updateSignUpSteps } from '../../reduxToolkit/authSlice';

import Back from '../../modules/auth/components/AuthBack';

function Index({ children }) {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const { signUp } = useAspSelector((state) => state.authentication);
  const { resetPasswordEmail } = useAspSelector((state) => state.authentication);
  const dispatch = useAspDispatch();

  const TOKEN = localStorage.getItem('authToken');
  const routeValidation =
    pathname === '/forgot-password' || pathname === '/reset-password' || pathname === '/login';
  let titleText, paragraph;

  useEffect(() => {
    if (TOKEN) {
      navigate('/user/home/overview');
    } else {
      navigate('/login');
    }
  }, []);

  const goBack = () => {
    dispatch(updateSignUpSteps({ ...signUp, step: signUp?.step === 2 ? 1 : 0 }));
  };

  switch (pathname) {
    case '/login':
      titleText = `Welcome back`;
      paragraph = 'Let’s do something great today';
      break;
    case '/forgot-password':
      titleText = 'Forgot Password?';
      paragraph = 'No worries, we’ll send you a link to reset your password.';
      break;
    case '/reset-password':
      titleText = 'Reset Password';
      paragraph = `Enter a new password for ${resetPasswordEmail}`;
      break;
    case '/signup':
      switch (signUp?.step) {
        case 0:
          titleText = `Let's ignite your growth`;
          paragraph = '';
          break;
        case 1:
          titleText = 'Let’s create a free account';
          paragraph = '';
          break;
        case 2:
          titleText = 'Verify your account';
          paragraph = '';
          break;
        default:
          titleText = '';
          paragraph = '';
      }
      break;
    default:
      titleText = '';
      paragraph = '';
  }

  const navigationFunc = (navTo) => (navTo === 'login' ? navigate('/login') : navigate('/signup'));

  return (
    <div className='authWrapper'>
      <div className='leftLayout'>
        <img
          alt='layoutImg'
          className='leftLayoutImg'
          src={images?.leftLayout}
        />
        <span className='rightsText'>© 2023 AptonShops Inc. All Rights Reserved</span>
      </div>

      <div className='rightLayout'>
        <div className='header'>
          <Title
            content={titleText}
            paragraph={paragraph}
          />
          {pathname === '/signup' && <Steps />}
        </div>
        <div className='body'>
          <Outlet />
          {children}
          {pathname === '/signup' && (
            <Divider
              color={'#d1d3d8'}
              width={'45%'}
            />
          )}
          <div className='login'>
            {routeValidation ? "Don't have an account?" : 'Already have an account?'}
            <span
              className='navigation'
              onClick={() => navigationFunc(routeValidation ? 'Signup' : 'login')}>
              {routeValidation ? 'Sign up' : 'Login'}
            </span>
          </div>
          {pathname === '/forgot-password' || pathname === '/reset-password' ? (
            <Back
              onClick={() => navigate('/login')}
              title={'Back to login'}
            />
          ) : (
            pathname === '/signup' &&
            signUp?.step !== 0 && (
              <Back
                onClick={goBack}
                title={'Back'}
              />
            )
          )}
        </div>
        <div className='footer'>
          <Terms />
        </div>
      </div>
    </div>
  );
}

export default Index;
