import React, { useState } from 'react';
import '../../../components/commonComponents/calendar/overviewCalender.css';

import { useNavigate } from 'react-router-dom';

import { ICONS } from '../../../assets/icons/index';

import CardMenu from './CardMenu';

import moment from 'moment';

const multipleAccounts = [
  // {
  //   id: 1,
  //   img: ICONS?.circleInstagram,
  // },
  // {
  //   id: 2,
  //   img: ICONS?.circleYoutube,
  // },
  // {
  //   id: 3,
  //   img: ICONS?.circleFacebook,
  // },
  {
    id: 1,
    img: ICONS?.Whatsapp,
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

function CalendarCard({ id, handleClick, name, postTime, post }) {
  const [hover, setHover] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className='calendarCard w-100 pointer'
      draggable='true'
      id={id}
      // onClick={() => navigate(`/user/campaign/overview/okr`)}
      onClick={() => handleClick(post)}
      onMouseEnter={() => setHover(true)}>
      <div className='flex-row h-100'>
        <div className='flex-column justify-center align-center'>
          <span className='verticalLine' />
        </div>
        <div className='flex-column space-between pl-5 w-100 pr-5'>
          <div className='flex-row align-center space-between w-100'>
            <div className='flex-row align-center'>
              <span className='calendar-post-time'>{moment(postTime).format('h:mma')}</span>
            </div>
            <div className='flex-row'>
              {/* <span className='calendar-post'>Published</span> */}
              <div className='card-post-menu'>
                <CardMenu />
              </div>
            </div>
          </div>
          <div className='flex-row  space-between w-100'>
            <div className='taskName'>{name}</div>
            <div className='flex-row avatarRow justify-center'>
              {multipleAccounts?.map((avatar) => (
                <span
                  className='multipleAvatar'
                  style={multipleAvatar}
                  key={avatar?.id}>
                  <img
                    src={avatar?.img}
                    alt='icons'
                    style={{ width: '16px ', height: '16px ' }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarCard;
