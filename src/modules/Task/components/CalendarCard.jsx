import React, { useState } from 'react';
import '../../../components/commonComponents/calendar/overviewCalender.css';

import { useNavigate } from 'react-router-dom';

import CardStatusDot from '../../../assets/customSVG/cardStatusDot';
import Calendar from '../../../assets/customSVG/customCalendar';
import Flag from '../../../assets/customSVG/customFlag';
import { ICONS } from '../../../assets/icons/index';
import { CampaignActions } from '../../../constant/app/campaign/campaignExtended';

import Avatar from '../../../components/commonComponents/avatar/Avatar';
import Progress from '../../../components/commonComponents/progressBar/horizontal/Index';
import CardMenu from './CardMenu';

const multipleChannels = [
  {
    id: 1,
    color: '#F96056',
    name: 'R',
  },
  {
    id: 2,
    color: '#FCD34D',
    name: 'A',
  },
  {
    id: 3,
    color: '#8B5CF6',
    name: 'K',
  },
];

const multipleAccounts = [
  {
    id: 1,
    img: ICONS?.circleInstagram,
  },
  {
    id: 2,
    img: ICONS?.circleYoutube,
  },
  {
    id: 3,
    img: ICONS?.circleFacebook,
  },
];

const drawer = {
  width: '14px ',
  height: '14px ',
  color: 'white',
  fontSize: '7px',
};

const multipleAvatar = {
  marginLeft: '-4px',
};

function CalendarCard({ id }) {
  const [hover, setHover] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className='calendarCard w-100 pointer'
      draggable='true'
      id={id}
      onClick={() => navigate(`/user/campaign/overview/okr`)}
      onMouseEnter={() => setHover(true)}>
      {hover ? (
        <div
          className='flex-row h-100'
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}>
          <div className='flex-column justify-center align-center'>
            <span className='verticalLine' />
          </div>
          <div className='flex-column space-between pl-5 w-100 pr-5'>
            <div className='flex-row align-center space-between w-100'>
              <div className='flex-row align-center'>
                <span>
                  <CardStatusDot />
                </span>
                <span className='pl-5 '>
                  <Calendar
                    width={'16'}
                    height={'15'}
                    color={'#25C277'}
                  />
                </span>
                <span
                  className='statusDay'
                  style={{ color: '#25C277' }}>
                  Tomorrow
                </span>
              </div>
              <Flag
                width={'20'}
                height={'20'}
              />
            </div>
            <div className='flex-row  space-between w-100'>
              <div className='taskName '>Setup an awareness ad campaign</div>
              <div className='flex-row'>
                {multipleChannels?.map((avatar) => (
                  <span
                    className='multipleAvatar'
                    style={multipleAvatar}
                    key={avatar?.id}>
                    <Avatar
                      name={avatar?.name}
                      style={{
                        backgroundColor: avatar?.color,
                        ...drawer,
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
          className='h-100 w-100 flex-column space-between'>
          <div className=' flex-row w-100 space-between'>
            <Progress
              width={'60%'}
              backgroundColor={'#FFEEED'}
              color={'#F96056'}
              status={'completed'}
            />
            <CardMenu />
          </div>
          <div className='flex-row w-100 space-between'>
            <div className='flex-row avatarRow justify-center'>
              {multipleAccounts?.map((avatar) => (
                <span
                  className='multipleAvatar'
                  style={multipleAvatar}
                  key={avatar?.id}>
                  <img
                    src={avatar?.img}
                    alt='icons'
                    style={{ width: '14px ', height: '14px ' }}
                  />
                </span>
              ))}
            </div>
            <div className='flex-row w-50 space-between'>
              {CampaignActions?.map((item) => (
                <div
                  className='flex-row align-center w-100'
                  key={item?.id}>
                  <img
                    src={item?.icon}
                    alt='icons'
                    className='actionIcon'
                  />
                  <span className='campaignActions'> {item?.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarCard;
