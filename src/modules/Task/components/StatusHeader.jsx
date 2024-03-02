import React, { useState } from 'react';
import '../styles/Task.css';

import { ICONS } from '../../../assets/icons/index';

import StatusList from '../../../components/commonComponents/StatusList/StatusList';
import Assignee from '../../../components/commonComponents/assignee/Index';
import Priority from '../../../components/commonComponents/Priority/Priority';

const StatusHeader = ({ showFlagImage, priority }) => {
  const [selectedStatus, setSelectedStatus] = useState('Todo');
  const [statusOpen, setStatusOpen] = useState(false);
  // const [flagOpen, setFlagOpen] = useState(false);

  const flagImageSrc = ICONS?.RoundedFlagRed;
  const flagImageSrc2 = ICONS?.SubTaskPriority;

  const currentDateTime = new Date();

  const formattedDateTime = currentDateTime.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const handleClick = () => {
    setStatusOpen(!statusOpen);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    // setStatusOpen(false);
  };

  return (
    <div className='create-task-middle-wrapper'>
      <div className='create-task-middle flex-row align-center space-between'>
        <div className='create-task-middle-title flex-row align-center space-between'>
          <span
            onClick={handleClick}
            className='pointer'>
            {selectedStatus}
          </span>
          <Assignee
            width='35px'
            height='35px'
          />
        </div>

        {showFlagImage ? (
          <div className='flag-header-wrapper flex-row align-center'>
            <Priority
              imageSrc={flagImageSrc}
              priorityItem={priority}
              width='20%'
            />
            <div className='flag-header-wrapper flex-column'>
              <span>Created @</span>
              <span>{formattedDateTime}</span>
            </div>
          </div>
        ) : (
          <>
            <Priority
              imageSrc={flagImageSrc2}
              priorityItem={priority}
            />
          </>
        )}
      </div>
      {statusOpen && (
        <StatusList
          selectedStatus={selectedStatus}
          onStatusClick={handleStatusClick}
        />
      )}
    </div>
  );
};

export default StatusHeader;
