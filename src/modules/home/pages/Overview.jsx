import React from 'react';

import OverviewLeft from '../components/OverviewLeft';
import OverviewMiddle from '../components/OverviewMiddle';
import OverviewRight from '../components/OverviewRight';
function Overview() {
  return (
    <div className='OverViewMain-container flex-row space-between'>
      <OverviewLeft />
      <OverviewMiddle />
      <OverviewRight />
    </div>
  );
}

export default Overview;
