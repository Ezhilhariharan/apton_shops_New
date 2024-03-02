import React from 'react';
import '../style/Dashboard.css';

import TitleAndDescription from '../../../components/commonComponents/Title/TitleAndDescription';
import VerticalSteps from '../components/VerticalSteps';
import Center from '../components/Center';
import Right from '../components/Right';

function Dashboard() {
  return (
    <div className='pageWrapper'>
      <TitleAndDescription
        size={'large'}
        gap={'1px'}
        title='Hello, Abinesh!'
        description='We are excited to have you join us. To personalize your onboarding please let us know about yourself.'
      />
      <div className='cardWrapper flex-row space-between'>
        <div className='left'>
          <VerticalSteps />
        </div>
        <div className='middle'>
          <Center />
        </div>
        <div className='right'>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
