import React, { useState, useEffect } from 'react';
import './appLayout.css';

import { useNavigate, useLocation } from 'react-router-dom';

import { Popover } from 'antd';

import { navigationConst } from '../../constant/app/appLayout';
import Task from '../../assets/customSVG/navTask';
import Report from '../../assets/customSVG/navReport';
import CRM from '../../assets/customSVG/navCRM';
import Inbox from '../../assets/customSVG/navInbox';
import OKR from '../../assets/customSVG/navOKR';
import Campaign from '../../assets/customSVG/navCampaign';
import Home from '../../assets/customSVG/navHome';
import Channels from '../../assets/customSVG/navChannels';
import Calendar from '../../assets/customSVG/navCalender';

import Avatar from '../../components/commonComponents/avatar/Avatar';
import ProfileBox from '../../components/commonComponents/navProfileBox/NavProfileBox';

// style
const avatarStyle = {
  height: '38px',
  width: '38px',
  background: '#ffe6b3',
  color: 'var(--textBlack)',
  fontSize: '1.2vw',
  fontWeight: ' 400 !important',
};

function SideBar() {
  const [navList, setNavList] = useState(navigationConst);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    updateNavListState(pathname);
  }, [pathname]);

  const navigateModule = (item) => {
    updateNavListState(item?.routeUrl);
    item?.navName === 'Channels'
      ? navigate('/user/channels/facebookpage')
      : item?.navName === 'Home'
      ? navigate('/user/home/overview')
      : navigate(`.${item?.routeUrl}`);
  };

  const updateNavListState = (path) => {
    setNavList((prev) => {
      const newState = prev?.map((prevItem) => {
        if (path?.includes(prevItem?.routeUrl)) {
          return { ...prevItem, selected: true };
        } else {
          return { ...prevItem, selected: false };
        }
      });
      return newState;
    });
  };

  return (
    <nav className='flex-column space-between'>
      <div>
        {navList?.map((item) => (
          <div
            key={item?.id}
            className='navBox'
            style={{ backgroundColor: item?.selected ? '#25c277' : 'white' }}
            onClick={() => navigateModule(item)}>
            {item?.navName === 'Home' && (
              <Home
                color={item?.selected ? 'white' : '#2d3036'}
                width={'20'}
                height={'19'}
              />
            )}
            {item?.navName === 'OKR' && (
              <OKR
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            {item?.navName === 'Campaign' && (
              <Campaign
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            {item?.navName === 'Calender' && (
              <Calendar
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            {item?.navName === 'Task' && (
              <Task
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            {item?.navName === 'Inbox' && (
              <Inbox
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            {item?.navName === 'CRM' && (
              <CRM
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            {item?.navName === 'Reports' && (
              <Report
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            {item?.navName === 'Channels' && (
              <Channels
                color={item?.selected ? 'white' : '#2d3036'}
                width={'22'}
                height={'21'}
              />
            )}
            <span
              className='navName'
              style={{ color: item?.selected ? 'white' : '#2d3036' }}>
              {item?.navName}
            </span>
          </div>
        ))}
      </div>
      {/* <div className='flex-row justify-center align-center '>
        <Avatar
          name='Ak'
          style={avatarStyle}
          onClick={() => setShowBox(!showBox)}
        />
        {showBox && <ProfileBox />}
      </div> */}
      <Popover
        content={<ProfileBox />}
        trigger='click'>
        <div className='flex-row justify-center align-center '>
          <Avatar
            name='Ak'
            style={avatarStyle}
          />
        </div>
      </Popover>
    </nav>
  );
}

export default SideBar;
