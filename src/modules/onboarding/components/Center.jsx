import React, { useState } from 'react';

import { dashboardBrand } from '../../../constant/app/dashboard/DashboardExtended';

import StepResultMapping from './common/StepResultMapping';
import TitleAndDescription from '../../../components/commonComponents/Title/TitleAndDescription';
import DashBoardStep from './common/StepsCard';
import Step1 from './step1/Step1';
import Step4 from './step4/Step4';
import Step2Channels from './step2/Step2Channels';
import { Status as StatusBadge } from '../../../components/commonComponents/status/Status';
import Step3Create from './step3/Step3Create';

import { useAspSelector } from '../../../test/jest-redux-hooks';

const DashboardBrand = () => {
  const [activeCardId, setActiveCardId] = useState(0);
  const { steps } = useAspSelector((state) => state.dashBoard);

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  return (
    <div className='dashboardSteps'>
      {dashboardBrand?.map((item, id) => (
        <DashBoardStep key={id}>
          <div className='flex-row space-between align-center'>
            <TitleAndDescription
              key={id}
              title={`${id + 1}. ${item?.title}`}
              description={item?.description}
              size={'medium'}
              isActive={id === activeCardId}
              onClick={() => handleCardClick(id)}
              gap={'3px'}
              paragraphLeft={item?.paragraphLeft}
            />
            <StatusBadge status={steps > item?.id ? 'Done' : 'Todo'} />
          </div>

          {steps === 1 && item?.id === 1 && <Step1 />}
          {steps === 2 && item?.id === 2 && <Step2Channels />}
          {steps === 3 && item?.id === 3 && <Step3Create />}
          {steps === 4 && item?.id === 4 && <Step4 />}
          <StepResultMapping currentItem={item?.id} />
        </DashBoardStep>
      ))}
    </div>
  );
};

export default DashboardBrand;
