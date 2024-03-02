import React, { useState } from 'react';
import '../styles/Task.css';

import { ICONS } from '../../../assets/icons';
import { Popover } from 'antd';
import Calendar from '../../../components/commonComponents/calendar/Calendar';

const DueDate = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleIconClick = () => {
    setPopoverVisible(!popoverVisible);
  };

  const content = <Calendar variant='popOverVariant' />;

  return (
    <>
      <Popover
        content={content}
        trigger='click'
        open={popoverVisible}>
        <img
          src={ICONS?.TaskDueDate}
          alt='dueDate'
          onClick={handleIconClick}
          className='dueDate-img'
        />
      </Popover>
    </>
  );
};

export default DueDate;
