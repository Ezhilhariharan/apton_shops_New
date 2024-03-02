import React, { useState } from 'react';
import '../styles/Task.css';

import { promotionType } from '../../../constant/app/campaign/campaignExtended';
import { ICONS } from '../../../assets/icons';

import { Popover } from 'antd';
import RadioButton from '../../../components/form/radio/RadioButton';

const DueDate = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  // const [selected, setSelected] = useState('Organic'); 

  const handleIconClick = () => {
    setPopoverVisible(!popoverVisible);
  };

  // const onClick = (e) => {
  //   // setSelected(type);

  //   console.log(selected, e?.target?.value);
  // };
  return (
    <>
      <Popover
        content={
          <div className='popover-content'>
            {promotionType?.map((type) => (
              <div
                key={type?.id}
                className='popover-content-wrap'>
                <div className='promotion-type-item'>
                  <img
                    src={type?.icon}
                    alt={type?.typeName}
                  />
                  <span className='promotion-typeName'>{type?.typeName}</span>
                </div>
                <div className='promotion-radio'>
                  <RadioButton
                    title={type?.typeName}
                    // onClick={onClick}
                    // selected={selected === type?.typeName}
                  />
                </div>
              </div>
            ))}
          </div>
        }
        trigger='click'
        open={popoverVisible}>
        <img
          src={ICONS?.addBGtransparent}
          alt='dueDate'
          onClick={handleIconClick}
          className='dueDate-img'
        />
      </Popover>
    </>
  );
};

export default DueDate;
