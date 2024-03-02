import React, { useEffect } from 'react';

import { useRef, useState } from 'react';
import { ICONS } from '../../../assets/icons';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateTaskTitle } from '../../../reduxToolkit/CampaignSlice';

const TaskName = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [campaignValue, setCampaignValue] = useState(`Task ${Math.ceil(Math.random())}`);
  const [action, setAction] = useState(false);

  const inputRef = useRef(null);

  const { taskTitle } = useAspSelector((state) => state.Campaign);
  const dispatch = useAspDispatch();

  const handleClick = () => {
    setIsEditing(true);
    setAction(!action);

    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  };

  const handleInputChange = (e) => {
    setCampaignValue(e.target.value);
    inputRef.current.style.width = `${e.target.scrollWidth}px`;
    dispatch(updateTaskTitle(e.target.value));
  };

  return (
    <div
      className='campaignHeader-wrapper  pointer'
      onClick={handleClick}>
      {isEditing ? (
        <span className='campaignHeader-campaign flex-row align-center'>
          <input
            type='text'
            ref={inputRef}
            value={taskTitle}
            maxLength='100'
            className='campaignHeader-input '
            onChange={handleInputChange}
            onBlur={() => setIsEditing(false)}
          />
        </span>
      ) : (
        <div className='flex-row align-center'>
          <span className={`campaignHeader-campaign ${action ? 'editable' : ''}`}>{taskTitle}</span>
          <img
            src={ICONS?.socialMediaEdit}
            alt='socialMediaEdit'
            className='socialMediaEdit-icon'
          />
        </div>
      )}
    </div>
  );
};

export default TaskName;
