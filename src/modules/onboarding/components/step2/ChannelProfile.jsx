import React from 'react';
import '../../style/DashboardRight.css';

import Avatar from '../../../../components/commonComponents/avatar/Avatar';

function ChannelProfile() {
  return (
    <div className='ChannelProfile flex-row align-center'>
      <Avatar
        // src={'cool'}
        alt={'cool'}
      />
      <span className='profileName'> Facebook</span>
    </div>
  );
}

export default ChannelProfile;
