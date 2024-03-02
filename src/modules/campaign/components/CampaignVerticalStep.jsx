import React from 'react';
import '../styles/Campaign.css';

import { useAspSelector } from '../../../test/jest-redux-hooks';

import { ICONS } from '../../../assets/icons/index';

const defaultColor = {
  color: '#898e99',
};

const activeColor = {
  color: '#25c277',
};

const CampaignVerticalStep = () => {
  const { steps } = useAspSelector((state) => state.dashBoard);

  return (
    <div className='campaign-stepper flex-column align-center '>
      <span className={steps > 0 ? 'dot-active' : 'campaign-dot p-relative'}>
        {steps > 0 && (
          <img
            src={ICONS?.greenTickVerticalSteps}
            alt='active'
            className='campaign-activeSteps'
          />
        )}
        <span
          className='campaign-stepNameVr p-absolute'
          style={steps > 0 ? activeColor : defaultColor}>
          Create Campaign
        </span>
      </span>
      <span className={steps > 1 ? 'vr-line-active' : 'vr-line'} />
      <span
        className={
          steps > 1 ? 'dot-active p-relative align-center justify-center ' : 'campaign-dot'
        }>
        {steps > 1 && (
          <img
            src={ICONS?.greenTickVerticalSteps}
            alt='active'
            className='campaign-activeSteps'
          />
        )}
        <span
          className='campaign-stepNameVr'
          style={steps > 1 ? activeColor : defaultColor}>
          Campaign Setup
        </span>
      </span>
    </div>
  );
};

export default CampaignVerticalStep;
