import React, { useEffect } from 'react';
import '../style/auth.css';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateSignUpSteps } from '../../../reduxToolkit/authSlice';

import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

function SignUp() {
  const dispatch = useAspDispatch();
  const { signUp } = useAspSelector((state) => state.authentication);
  useEffect(() => {
    dispatch(
      updateSignUpSteps({
        professionalIdentity: '',
        email: '',
        password: '',
        termsAndService: '',
        verifyCode: '',
        step: 0,
      }),
    );
  }, []);
  return (
    <>
      {signUp?.step === 0 && <Step1 />}
      {signUp?.step === 1 && <Step2 />}
      {signUp?.step === 2 && <Step3 />}
    </>
  );
}

export default SignUp;
