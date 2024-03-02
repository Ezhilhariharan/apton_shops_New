import React, { useState } from 'react';
import '../../style/DashboardRight.css';

import { channels } from '../../../../constant/app/dashboard/DashboardExtended';

function ChannelSwitch({ activatingChannel, activeChannel }) {
  const [hoverChannel, setHoverChannel] = useState();
  return (
    <div className='channelSwitch flex-row space-between'>
      {channels?.map((item) => (
        <div
          key={item?.id}
          className={
            hoverChannel === item?.channelName || activeChannel === item?.channelName
              ? 'channelBox-active'
              : 'channelBox '
          }
          // onMouseEnter={() => setHoverChannel(item?.channelName)}
          // onMouseLeave={() => setHoverChannel('')}
          onClick={() => activatingChannel(item)}>
          <img
            className='switchIcon'
            src={item?.icon}
            alt={item?.channelName}
          />
          {(hoverChannel === item?.channelName || activeChannel === item?.channelName) && (
            <span className='channelName'>{item?.category}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChannelSwitch;
