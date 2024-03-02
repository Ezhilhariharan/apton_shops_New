import React from 'react';
import '../style/HorizontalSteps.css';

import { useAspSelector } from '../../../test/jest-redux-hooks';

const defaultColor = {
  color: '#898e99',
};
const activeColor = {
  color: '#25c277 ',
};

function HorizontalSteps() {
  const { signUp } = useAspSelector((state) => state.authentication);
  return (
    <div className='stepsWrapper'>
      <span className='dot-active'>
        <span
          className='stepName'
          style={activeColor}>
          Step 1
        </span>
      </span>
      <span className={signUp?.step > 0 ? 'hr-line-active' : 'hr-line'} />
      <span className={signUp?.step > 0 ? 'dot-active' : 'dot'}>
        <span
          className='stepName'
          style={signUp?.step > 0 ? activeColor : defaultColor}>
          Step 2
        </span>
      </span>
      <span className={signUp?.step > 1 ? 'hr-line-active' : 'hr-line'} />
      <span className={signUp?.step > 1 ? 'dot-active' : 'dot'}>
        <span
          className='stepName'
          style={signUp?.step > 1 ? activeColor : defaultColor}>
          Step 3
        </span>
      </span>
    </div>
  );
}

export default HorizontalSteps;
