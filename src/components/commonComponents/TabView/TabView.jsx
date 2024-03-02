import React, { useState, useEffect } from 'react';
import './TabView.css';

import { useNavigate, useLocation } from 'react-router-dom';

import { ICONS } from '../../../assets/icons';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateActiveTab } from '../../../reduxToolkit/CampaignSlice';

const TabView = () => {
  const [localTabList, setLocalTabList] = useState([]);
  const dispatch = useAspDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { tabList, activeTab } = useAspSelector((state) => state.Campaign);

  useEffect(() => {
    if (pathname === '/user/calender') {
      setLocalTabList(() => [
        { tabName: 'calender', icon: ICONS?.calendarTabIcon, activeIcon: ICONS?.calendarTabIcon },
      ]);
      handleClick('calender');
    } else {
      setLocalTabList(() => {
        const newState = tabList?.map((list) => {
          if (list?.tabName === 'campaignList') {
            return { ...list, icon: ICONS?.tabViewHome, activeIcon: ICONS?.TabActiveHome };
          } else if (list?.tabName === 'campaignName') {
            return {
              ...list,
              icon: ICONS?.CampaignSpeaker,
              activeIcon: ICONS?.greenSpeakerCampaign,
            };
          } else if (list?.tabName === 'broadCast') {
            return {
              ...list,
              name: `Task ${Math.ceil(Math.random())}`,
            };
          }
          // else {
          //   return { ...list };
          // }
        });
        return newState;
      });
    }
  }, [tabList]);

  const handleTabClick = (item) => {
    handleClick(item?.tabName);
    if (item?.tabName === 'campaignList') {
      navigate(`/user/campaign`);
    } else if (item?.tabName === 'campaignName') {
      navigate(`/user/campaign/overview/${item?.id}`);
    } else if (item?.tabName === 'broadCast') {
      navigate(`/user/campaign/overview/whatsapp/${item?.campaignId}/${item?.broadCastId}`);
    }
  };

  const handleClick = (data) => dispatch(updateActiveTab(data));

  const handleCancel = (data) => {
    navigate('/user/campaign');
    if (data?.tabName === 'campaignName') {
      const cancelTab = localTabList?.filter((item) => item?.tabName !== data?.tabName);
      setLocalTabList(cancelTab);
    }
  };

  return (
    <div className='tabView-wrapper'>
      <span></span>
      {localTabList?.slice(0, 3)?.map((item) => (
        <div
          key={item?.id}
          className={`tab ${activeTab === item?.tabName ? 'focused' : ''}`}>
          {item?.icon && item?.activeIcon && (
            <>
              <span className={`tab ${activeTab === item?.tabName ? 'icon-focused' : ''}`}>
                {activeTab === item?.tabName && item?.activeIcon ? (
                  <>
                    <img
                      src={item?.activeIcon}
                      alt='tabView'
                      className='ml-10'
                      tabIndex='0'
                      onClick={() => handleTabClick(item)}
                    />
                    {item?.tabName === 'campaignName' && (
                      <img
                        src={ICONS?.popupX}
                        alt='exit'
                        onClick={() => handleCancel(item)}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <img
                      src={item?.icon}
                      alt='tabView'
                      tabIndex='0'
                      onClick={() => handleTabClick(item)}
                    />
                    {item?.tabName === 'campaignName' && (
                      <img
                        src={ICONS?.popupX}
                        alt='exit'
                        className='ml-10'
                        onClick={() => handleCancel(item)}
                      />
                    )}
                  </>
                )}
              </span>
            </>
          )}

          {activeTab === 'broadCast' && item?.tabName === 'broadCast' && (
            <span
              className={`tab ${activeTab === item?.tabName ? 'name-focused' : ''}`}
              onClick={() => handleTabClick(item)}>
              {item?.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabView;
