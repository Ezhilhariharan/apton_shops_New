import React, { useState } from 'react';
import '../styles/Task.css';

import { taskHeader } from '../../../constant/app/campaign/campaignExtended';
import TaskName from './TaskName';

const TaskHeader = ({ setSelectedTab }) => {
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (item) => {
    setClickedItem(item?.id === clickedItem ? null : item?.id);
    setSelectedTab(item?.taskName);
  };

  return (
    <div className='task-header-container flex-row align-center space-between'>
      <TaskName />
      {/* <div className='flex-row align-center'>
        {taskHeader?.map((item) => (
          <div
            className={`task-header-wrapper flex-row align-center pointer' ${
              clickedItem === item?.id ? 'task-header-wrapper-focused' : ''
            }`}
            onClick={() => handleItemClick(item)}>
            {clickedItem === item?.id && item?.icon1 ? (
              <img
                src={item?.icon1}
                alt='task'
              />
            ) : (
              <img
                src={item?.icon}
                alt='task'
              />
            )}
            {item?.taskName && (
              <span
                className={`task-header-wrapper-name pointer ${
                  clickedItem === item?.id ? 'task-header-wrapper-name-focused' : ''
                }`}
                onClick={() => handleItemClick(item)}>
                {item?.taskName}
              </span>
            )}
            <span className='task-header-b'></span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TaskHeader;
