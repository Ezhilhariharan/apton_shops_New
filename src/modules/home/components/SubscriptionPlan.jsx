import React from 'react';

import { ICONS } from '../../../assets/icons';
import { Button } from '../../../components/form/Button/Button';
import Tooltip from '../../../components/commonComponents/tooltip/Tooltip';

const SubscriptionPlan = () => {
  return (
    <div className='brand-details-main-container'>
      <div className='subscription-container flex-row  space-between'>
        <span>Subscription plan</span>
      </div>
      <div className='subscription-wrapper flex-column space-between'>
        <div className='flex-row space-between align-center'>
          <div className=' staterPlan-container flex-row'>
            <img
              src={ICONS?.BillingRoundIcon}
              alt='round'
            />
            <div className='flex-column '>
              <div className='flex-row align-center'>
                <p>Starter Plan</p>
                <Tooltip title={'Kindly Select the Identity'}>
                  <img
                    src={ICONS?.BillingGreywarningIcon}
                    alt='warning'
                    onClick={() => handleClick()}
                  />
                </Tooltip>
              </div>
              <p className='pointer'>Monthly</p>
            </div>
          </div>

          <div className='staterPlan-Left flex-column '>
            <div className='flex-end '>
              <span>$25.00</span>
            </div>
            <p>( Renews Dec 18, 2023 )</p>
          </div>
        </div>
        <div className='brand-button flex-row w-[100%] align-center space-between'>
          <div className=' flex-row '>
            <Button
              label={'Upgrade'}
              size={'small'}
            />
            <button className='btn'>Cancel subscription</button>
          </div>
          <p className='pointer'>Update payment details</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
