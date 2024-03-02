import React, { useState } from 'react';
import '../../../components/commonComponents/calendar/overviewCalender.css';

import { useNavigate } from 'react-router-dom';

import { ICONS } from '../../../assets/icons/index';
import CardStatusDot from '../../../assets/customSVG/cardStatusDot';
import Flag from '../../../assets/customSVG/customFlag';
import Calendar from '../../../assets/customSVG/customCalendar';
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

function BoardCard({ id }) {
  const [hover, setHover] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className='boardCard pl-5 pr-5 pt-10 pb-10 pointer'
      draggable='true'
      id={id}
      style={{ height: '120px' }}
      onClick={() => navigate(`/user/campaign/overview/okr`)}
      onMouseEnter={() => setHover(true)}>
      {hover ? (
        <div
          className='flex-row h-100 w-100'
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}>
          <div className='flex-column justify-center'>
            <div className='verticalLine' />
          </div>
          <div className='flex-column space-between w-100'>
            <div className='flex-row align-center space-between w-100 pl-5 pr-5'>
              <div className='flex-row align-center'>
                {/* <CardStatusDot /> */}
                <div className='boardDate'>11:00 am</div>
              </div>
              <div>
                <Flag
                  width={'20'}
                  height={'20'}
                />
              </div>
            </div>
            <div className='flex-row content ml-5 mr-5'> Setup an awareness ads for campaign</div>
            <div className='flex-row align-center space-between w-100'>
              <div className='flex-row align-center '>
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
          <div className='flex-row mt-5 mb-5'>
            <img
              src={ICONS?.dragVertical}
              alt='drag'
              style={{ width: '20px', height: '20px' }}
            />
            <div className=' content ml-5 mr-5'>Setup an awareness ads for campaign</div>
          </div>

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

export default BoardCard;
