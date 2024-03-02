import React from 'react';

import '../styles/eventCard.css';

import { ICONS } from '../../../assets/icons';

const EventCard = ({ list }) => {
  return (
    <div className='overViewContainer '>
      <div
        className={`w-100 flex-row space-between `}
        style={{ padding: '5px 0px 0px 0px' }}>
        <div className='overview-wrapper font-large weight-bold'>Overview</div>
        <div className='viewAnalyticsBtn'>
          <img
            src={ICONS?.BarGraphIcon}
            alt='graphICon'
            style={{ width: '18px', height: '18px' }}
          />
          View Analytics
        </div>
      </div>
      <div className='eventCardContainer' >
        {list?.map((item, index) => (
          <div
            key={item?.id}
            className='cardItemContainer'>
            <img
              src={item?.icon}
              style={{ width: '55px', height: '55px' }}
              alt='performance'
            />
            <div className='textContainer'>
              <span className='title'>{item?.title}</span>
              <span className='description'>{item?.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
