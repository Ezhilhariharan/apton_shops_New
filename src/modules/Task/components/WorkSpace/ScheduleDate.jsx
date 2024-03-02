import React, { useState } from 'react';
import { ICONS } from '../../../../assets/icons';
import { Popover } from 'antd';
import Calendar from '../../../../components/commonComponents/calendar/Calendar';
import RadioButton from '../../../../components/form/radio/RadioButton';

const ScheduleDate = () => {
  const [dueDateOpen, setDueDateOpen] = useState(false);
  const [isRotated, setRotated] = useState(false);

  const rotationClass = isRotated ? 'rotate' : '';

  const handleClick = () => {
    setDueDateOpen(!dueDateOpen);
    setRotated(!isRotated);
  };

  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleOpen = () => {
    setPopoverVisible(!popoverVisible);
  };

  const content = <Calendar variant='popOverVariant' />;
  return (
    <>
      <div className='schedule-main-container flex-column'>
        <div className='schedule-container flex-row align-center space-between pointer mt-5'>
          <div className='flex-row'>
            <span
              className='workArea-name pr-10'
              onClick={handleClick}>
              Schedule Date
            </span>
            {/* {content && <RadioButton selected={true} />} */}
          </div>
          <img
            src={ICONS?.WorkSpaceRight}
            alt='WorkSpaceRight'
            className={`rotating-image ${rotationClass}`}
            onClick={handleClick}
          />
        </div>

        {dueDateOpen && (
          <div className='flex-row'>
            <div className='schedule-date-wrap'>
              <Popover
                content={content}
                trigger='click'
                open={popoverVisible}>
                <div className='flex-row'>
                  <img
                    src={ICONS?.HeaderSwitchingCalender}
                    alt='HeaderSwitchingCalender'
                    onClick={handleOpen}
                  />
                  <span className='date-name pl-5'>Oct 15</span>
                </div>
              </Popover>
            </div>
            <div className='schedule-date-wrap1 ml-10'>
              <div className='flex-row'>
                <img
                  src={ICONS?.HeaderSwitchingCalender}
                  alt='HeaderSwitchingCalender'
                  onClick={handleOpen}
                />
                <span className='date-name pl-5'>12 : 00 AM</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='border-work-area' />
    </>
  );
};

export default ScheduleDate;
