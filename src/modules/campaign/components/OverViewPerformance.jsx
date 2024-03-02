import React from 'react';
import '../styles/campaignModal.css';

import { overviewPerformance } from '../../../constant/app/campaign/campaignExtended';
import { ICONS } from '../../../assets/icons';

const OverViewPerformance = () => {
  return (
    <div
      className='overviewPerformance-container'
      style={{ border: '1px solid red' }}>
      <div className='overviewPerformance-container-title flex-row space-between'>
        <span className='overviewPerformance-title'>Campaign Performance</span>

        <span className='overviewPerformance-title-right flex-row align-center'>
          <img
            src={ICONS?.overviewAnalytics}
            alt='overviewAnalytics'
          />
          View Analytics
        </span>
      </div>

      <div className='overviewPerformance-wrapper flex-row align-center  mt-10'>
        {overviewPerformance?.map((item) => (
          <div
            key={item?.id}
            className='overviewPerformance-full-wrapper'>
            <div
              className={`overviewPerformance-wrap flex-row align-center ${
                item.id === 4 ? 'special-color' : ''
              }`}>
              <img
                src={item?.icon}
                alt='performance'
              />
              <div className='overviewPerformance-wrap-details flex-column'>
                <span>{item?.title}</span>
                <span>{item?.content}</span>
              </div>
              <div
                className={`overviewPerformance-reached flex-row align-center ${
                  item.id === 4 ? 'special-bgColor' : ''
                }`}>
                {item?.icon1 && (
                  <img
                    src={item?.icon1}
                    alt='trend'
                  />
                )}
                {item?.reach && (
                  <span className={`reach ${item.id === 4 ? 'special-color' : ''}`}>
                    {item?.reach}
                  </span>
                )}
              </div>
              {/* <span className='overview-border'></span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverViewPerformance;
