import React from 'react';
import './StatusList.css';

import { statusList } from '../../../constant/app/campaign/campaignExtended';
import { statusColors } from '../../../constant/app/campaign/campaignExtended';

const StatusList = ({ selectedStatus, onStatusClick }) => {
  return (
    <div className='statusList-container'>
      {statusList?.map((item) => (
        <React.Fragment key={item?.id}>
          <div
            className={`statusList-wrapper ${
              selectedStatus === item?.status ? 'selected-status' : ''
            }`}
            onClick={() => onStatusClick(item?.status)}
            style={{
              backgroundColor: statusColors[item?.status],
            }}
            // style={{
            //   backgroundColor: selectedStatus === item?.status ? statusColors[item?.status] : '',
            // }}
          >
            <div
              key={item.id}
              className={`statusList-status ${
                selectedStatus === item.status ? 'selected-status' : ''
              }`}
              onClick={() => onStatusClick(item.status)}></div>
            <span
              className={`statusList-status statusList-status-${item?.id} ${
                item?.status === 'Todo' ? 'todo-text-color' : ''
              } ${item?.className ? item?.className.join(' ') : ''}`}>
              {item?.status}
            </span>
          </div>
          <span className='statusList-line'></span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatusList;
