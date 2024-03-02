import React, { useState } from 'react';
import '../styles/overview.css';

import { homeMiddle } from '../../../constant/app/home/home';
import { ICONS } from '../../../assets/icons';
import { useNavigate } from 'react-router-dom';

const MiddleConnection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleIconClick = (direction) => {
    const increment = direction === 'next' ? 4 : -3;
    const newStartIndex = startIndex + increment;

    const newStartIndexInRange = Math.max(0, Math.min(newStartIndex, homeMiddle?.length - 4));

    setStartIndex(newStartIndexInRange);
  };

  const [Isnavigate, setIsNavigate] = useState(false);

  const navigate = useNavigate();

  const handleTabClick = (item) => {
    if (item?.url) {
      navigate(item.url);
    } else {
      setIsNavigate(item);
    }
  };

  return (
    <div className='homeMiddle-main-container flex-row space-between'>
      <div className='homeMiddle-main-icon flex-row space-between'>
        <div className='rotatingImage3'>
          {startIndex > 0 && (
            <img
              src={ICONS?.WorkSpaceRight}
              alt='WorkSpaceRight'
              className={'rotating-image3'}
              onClick={() => handleIconClick('prev')}
            />
          )}
        </div>
        {/* <div className='rotatingImage4'> */}
        <img
          src={ICONS?.WorkSpaceRight}
          alt='WorkSpaceRight'
          className={'rotating-image4'}
          onClick={() => handleIconClick('next')}
        />
      </div>
      <div className='home-middle-container flex-row pointer'>
        {homeMiddle?.slice(startIndex, startIndex + 4).map((item, index) => (
          <div
            key={item?.id}
            className={`homeMiddle-container flex-column space-between  ${
              index === 3 ? 'last-card' : ''
            }`}
            onClick={() => handleTabClick(item)}>
            <div
              className={`homeMiddle-wrapper flex-row align-center space-between  ${
                item?.connection ? 'reached ' : ''
              }`}>
              <img
                src={item?.icon}
                alt='homeMiddle'
                className={`homeMiddle-icon${item?.connection ? 'reached ' : ''}`}
              />
              <div className='homeMiddle-reached flex-row align-center justify-center'>
                {item?.icon1 && (
                  <img
                    src={item?.icon1}
                    alt='trend'
                  />
                )}
                {item?.reach && <span className='reach'>{item?.reach}</span>}
              </div>
            </div>
            <div className='flex-column'>
              <span className='homeMiddle-content'>{item?.content}</span>

              <span className='homeMiddle-title'>{item?.title}</span>
            </div>
            {/* <button className='homeMiddle-connect'>Connect</button> */}
            {item?.connection ? <button className='homeMiddle-connect'>Connect</button> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleConnection;
