import React from 'react';
import '../style/VerticalSteps.css';

import { ICONS } from '../../../assets/icons/index';

import { useAspSelector } from '../../../test/jest-redux-hooks';

const defaultColor = {
  color: '#898e99',
};

const activeColor = {
  color: '#25c277',
};

function VerticalSteps() {
  const { steps } = useAspSelector((state) => state.dashBoard);

  return (
    <div className='stepper'>
      <span className={steps > 0 ? 'dot-active active' : 'dot'}>
        {steps > 0 && (
          <img
            src={ICONS?.greenTickVerticalSteps}
            alt='active'
            className='activeSteps'
          />
        )}
        <span
          className='stepNameVr'
          style={steps > 0 ? activeColor : defaultColor}>
          Create Brand
        </span>
      </span>
      <span className={steps > 1 ? 'vr-line-active' : 'vr-line'} />
      <span className={steps > 1 ? 'dot-active active' : 'dot'}>
        {steps > 1 && (
          <img
            src={ICONS?.greenTickVerticalSteps}
            alt='active'
            className='activeSteps'
          />
        )}
        <span
          className='stepNameVr'
          style={steps > 1 ? activeColor : defaultColor}>
          Connect Channels
        </span>
      </span>
      <span className={steps > 2 ? 'vr-line-active' : 'vr-line'} />
      <span className={steps > 2 ? 'dot-active active' : 'dot'}>
        {steps > 2 && (
          <img
            src={ICONS?.greenTickVerticalSteps}
            alt='active'
            className='activeSteps'
          />
        )}
        <span
          className='stepNameVr'
          style={steps > 2 ? activeColor : defaultColor}>
          Publish Post
        </span>
      </span>
      <span className={steps > 3 ? 'vr-line-active' : 'vr-line'} />
      <span className={steps > 3 ? 'dot-active active' : 'dot'}>
        {steps > 3 && (
          <img
            src={ICONS?.greenTickVerticalSteps}
            alt='active'
            className='activeSteps'
          />
        )}
        <span
          className='stepNameVr'
          style={steps > 3 ? activeColor : defaultColor}>
          Join Community
        </span>
      </span>
    </div>
  );
}

export default VerticalSteps;
