import React, { useState } from 'react';
import './Priority.css';

import { priority, priorityColors } from '../../../constant/app/campaign/campaignExtended';
import Flag from '../../../assets/customSVG/Flag';
import { Popover } from 'antd';

const Priority = ({ imageSrc }) => {
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    setPopoverVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setPopoverVisible(visible);
  };

  const handleFlagSelectedClick = (visible) => {
    setPopoverVisible(visible);
  };

  return (
    <Popover
      trigger='click'
      content={
        <div className='priority-container'>
          {priority?.map((item) => (
            <React.Fragment key={item?.id}>
              <div
                className={`priority-wrapper flex-row align-center justify-center ${
                  selectedFlag === item ? 'selected' : ''
                }`}
                style={{
                  backgroundColor: priorityColors[item?.priorityName],
                }}
                onClick={() => handleFlagClick(item)}>
                <Flag color={item?.color} />
                <span
                  className='priority-name'
                  style={{ color: item?.color }}>
                  {item?.priorityName}
                </span>
              </div>
              <div className='priority-line'></div>
            </React.Fragment>
          ))}
        </div>
      }
      open={popoverVisible}
      onVisibleChange={handleVisibleChange}>
      {selectedFlag ? (
        <Flag
          color={selectedFlag?.color}
          style={{
            border: `1px solid ${selectedFlag?.color}`,
            borderRadius: '50%',
            padding: '5px',
            width: '30px',
            height: '30px',
          }}
          onClick={() => handleFlagSelectedClick(true)}
        />
      ) : (
        <img
          src={imageSrc}
          alt='flag'
          className='pointer'
        />
      )}
    </Popover>
  );
};

export default Priority;
