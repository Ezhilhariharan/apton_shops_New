import React, { useState } from 'react';
// import '../../style/Dashboard.css';
// import '../../../../modules/auth/style/Dashboard.css';
import { Card } from '../../../../components/commonComponents/Cards/Card';
import Step1Information from '../../../../components/commonComponents/step/Step1information';
import DashboardStep1 from './Step1BrandDetails';
import { DashboardCard } from './OnboardingCard';
import { dashboardCard } from '../../../../constant/app/dashboard/Dashboard';
import { dashboardBrandStep1Card } from '../../../../constant/app/dashboard/DashboardExtended';
import { Button } from '../../../../components/form/Button/Button';

// import StepResultMapping from './StepResultMapping';

const DashboardStep1Card = () => {
  const [selected, setSelected] = useState(0);

  const handleCardClick = (id) => {
    setSelected(id);
  };

  const handleBackClick = (id) => {
    setSelected(id);
  };

  const toggleDashboardCardDetails = () => {
    setSelected(3);
  };

  const handleCardButtonClick = (id) => {
    setSelected(1);
  };

  return (
    <>
      {selected !== 1 && selected !== 3 ? (
        <div className='dashboardBrandStep1Card flex-column '>
          <p>Do you currently have any brand for your product or services?</p>
          <div className='brand-step1 flex-row'>
            {dashboardBrandStep1Card?.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item?.title}
                  cardClick={() => handleCardClick(item.id)}
                  margin={'30px 0 0 0'}
                  padding={'13px 16px'}
                  hoverCard='hover-card'
                  selected={item.id === selected ? true : false}
                  style={{ marginTop: 15 }}
                  primary>
                  <div className='yes-no-content flex-column align-center justify-center'>
                    <img
                      src={item?.image}
                      alt='emoji'
                    />
                    <h4>{item?.title}</h4>
                    <p>{item?.content}</p>
                  </div>
                </Card>
              );
            })}
          </div>
          {selected === 2 && <Step1Information handleDetailsClick={toggleDashboardCardDetails} />}
        </div>
      ) : (
        <div>{selected === 1 && <DashboardStep1 onBackClick={handleBackClick} />}</div>
      )}
      {selected === 3 && (
        <div className='dashboard-card-container flex-column align-left flex-start '>
          <p>Recommended brand names</p>
          {dashboardCard?.map((item) => (
            <DashboardCard
              key={item.id}
              title={item?.title}
              content={item?.content}
              siteIcon={item?.siteIcon}
              siteLink={item?.siteLink}
              channelIcon={item?.channelIcon}
              channelName={item?.channelName}
              handleButtonClick={handleCardButtonClick}
            />
          ))}
          <div className='create-brand flex-row align-right flex-end pointer'>
            <h5 onClick={handleBackClick}>Back</h5>
            <Button
              label={'Regenerate'}
              size={'small'}
            />
          </div>
        </div>
      )}
      {/* <StepResultMapping /> */}
    </>
  );
};

export default DashboardStep1Card;
