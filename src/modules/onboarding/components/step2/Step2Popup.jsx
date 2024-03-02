import React, { useState } from 'react';
import '../../style/DashboardCenter.css';

import { ICONS } from '../../../../assets/icons/index';

import RadioButton from '../../../../components/form/radio/RadioButton';
import { Card } from '../../../../components/commonComponents/Cards/Card';

const Step2Popup = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    setSelected(e?.target?.checked);
  };

  return (
    <div className='step2-popup'>
      <Card
        selected={selected}
        margin={'5px 0 0 0'}
        padding={'0px'}
        primary>
        <div className='step2Card-wrapper'>
          <div className='step2Card-wrap'>
            <img
              src={ICONS.userProfileIcon}
              alt='user'
            />
            <div className='step2Card-wrap-details'>
              <h2>Gochew Grill</h2>
              <h5>0 page followers</h5>
            </div>
          </div>
          <div className='popup-radiobtn'>
            <RadioButton
              style={{ width: '15px', height: '15px' }}
              onClick={handleClick}
              selected={selected}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Step2Popup;
