import React from 'react';
import '../styles/overview.css';

import { homeRightList, homeRightNotify } from '../../../constant/app/home/home';
import { activeChannels } from '../../../constant/app/appLayout';
import { images } from '../../../assets/images/index';
import Calendars from './Calendars';
import dayjs from 'dayjs';

const OverviewRight = () => {
  let selectedDate = dayjs();
  const currentDate = dayjs();

  async function getDates(date) {
    selectedDate = date;
  }

  return (
    <div className='overview-Right flex-column space-between'>
      <div className='overview-Right-main-container '>
        <Calendars
          selectedDate={selectedDate}
          getDates={getDates}
          currentDate={currentDate}
        />

        <div className='homeRightList-container flex-column space-between'>
          {homeRightList?.map((item) => (
            <div
              key={item?.id}
              className='overview-Right-container flex-row '>
              <div
                className='campaignColor'
                style={{ backgroundColor: item?.campaignColor }}></div>
              <div className='overview-Right-border flex-column space-between'>
                <span className='overview-card-time'>{item?.time}</span>

                <div className='flex-row space-between'>
                  <span className='overview-card-name'>{item?.name}</span>

                  <div className='flex-row pl-10'>
                    {activeChannels?.map((item) => (
                      <div className='multipleIcons1 flex-row align-center'>
                        <div className='flex-row align-center'>
                          <img
                            src={item?.icon}
                            alt='channel'
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className='empty-image flex-column align-center justify-center'>
            <img
              alt='OverViewEmpty'
              className='OverViewEmpty pt-5'
              src={images?.OverViewEmpty}
            />
            <span className='empty-image-title'>You're all caught up!</span>
            <span className='empty-image-content'>
              When you get notifications, they will show up here
            </span>
          </div> */}
        </div>
      </div>

      <div className='overview-Right-notification flex-column '>
        <div className='overview-Right-notification-wrap flex-column'>
          <span className='overview-Right-notification-notify'>Notification</span>
          <span className='overview-Right-notification-today pt-10'>Today</span>

          {/* <div className='empty-image flex-column align-center justify-center'>
            <img
              alt='OverViewEmpty'
              className='OverViewNotifyEmpty pt-10'
              src={images?.OverViewNotifyEmpty}
            />
            <span className='empty-image-title'>You're all caught up!</span>
            <span className='empty-image-content'>
              When you get notifications, they will show up here
            </span>
          </div> */}
          <div className='over-view-main-right-notification-container'>
            <div className='over-view-right pt-5'>
              {homeRightNotify?.map((item) => (
                <div
                  key={item?.id}
                  className='overview-Right-notification-container flex-row '>
                  <img
                    src={item?.icon}
                    alt='homeRightNotify'
                  />
                  <div className='w-100 flex-column pl-5'>
                    <div className='w-100 flex-row align-center space-between'>
                      <span className='overview-Right-notification-name'>{item?.name}</span>
                      <span className='overview-Right-notification-time'>{item?.time}</span>
                    </div>
                    <span className='overview-Right-notification-content '>{item?.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewRight;
