import React from 'react';
import '../../styles/WorkSpace/SocialMedia.css'

import {
  workSpaceRight,
  workSpaceRightAnalytics,
  workSpaceRightInteraction,
} from '../../../../constant/app/workSpace/WorkSpace';
import { ICONS } from '../../../../assets/icons';

const FbAnalytics = () => {
  return (
    <div className='analytics-main-container'>
      <div className='analytic-main-header flex-row p-10'>
        <img
          src={ICONS?.Performance}
          alt='Performance'
        />
        <span className='analytic-header pl-5'>Analytics</span>
      </div>
      <div className='analytics-main-heading'>
        <span className='analytics-heading'>Facebook Post Insights</span>
        <div className='analytics-container flex-row align-center '>
          {workSpaceRight?.map((item) => (
            <div
              className='analytics-wrapper flex-column align-center space-evenly'
              key={item?.id}>
              <img
                src={item?.icon}
                alt='analytics'
                className='pb-10'
              />
              <span>{item?.value}</span>
            </div>
          ))}
        </div>
        <div className='workSpaceRightAnalytics-container'>
          {workSpaceRightAnalytics?.map((item) => (
            <div
              key={item?.id}
              className='workSpaceRightAnalytics-wrapper flex-column align-center'>
              {item?.icon && (
                <img
                  src={item?.icon}
                  alt='analytics'
                />
              )}
              <div className='workSpaceRightAnalytics-middle flex-row align-center justify-center'>
                <span className='workSpaceRightAnalytics-value'>{item?.value}</span>

                <span className='workSpaceRightAnalytics-percentage'>{item?.percentage}</span>
                {item?.icon1 && (
                  <img
                    src={item?.icon1}
                    alt='analytics'
                  />
                )}
              </div>
              <span>{item?.analyticName}</span>
            </div>
          ))}
        </div>
        <div className='interaction-main-container flex-column align-center'>
          <span className='pt-10'>Interactions</span>
          <div className='interaction-container flex-row align-center  space-between pt-10'>
            {workSpaceRightInteraction?.map((item) => (
              <div
                key={item?.id}
                className='interaction-wrap flex-column align-center'>
                <img
                  src={item?.icon}
                  alt='Interactions'
                />
                <span className='pt-5'>{item?.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FbAnalytics;
