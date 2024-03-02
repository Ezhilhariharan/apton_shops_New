import React, { useRef, useState } from 'react';
import '../styles/Task.css';

import { KeyResults } from '../../../constant/app/campaign/campaignExtended';
import { ICONS } from '../../../assets/icons/index';
import TaskName from './TaskName';

const SelectCampaign = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);


  const handleIconClick = () => {
    setPopoverVisible(!popoverVisible);
  };
  return (
    <>
      <div
        className='select-campaign-wrapper flex-row align-center p-relative'
        onClick={handleIconClick}>
        <span className='select-campaign-title'>Select Campaign</span>
        <img
          src={ICONS?.SelectDropdown}
          alt='CaretDown'
        />
      </div>

      {popoverVisible && (
        <div className='select-campaign-popover p-absolute'>
          {KeyResults?.map((type) => (
            <div
              key={type?.id}
              className='select-campaign-popover-wrap'>
              <div className='select-campaign-popover-item flex-row align-center pt-10'>
                <img
                  src={type?.icon1}
                  alt={type?.typeName}
                  className='select-campaign-icon1'
                />
                <img
                  src={type?.icon}
                  alt={type?.typeName}
                />
                <span className='select-campaign-popover-key pl-10'>{type?.key}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    <TaskName />
    </>
  );
};

export default SelectCampaign;
