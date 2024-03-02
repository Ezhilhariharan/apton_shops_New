import React, { useState } from 'react';
import '../../styles/WorkSpace/SocialMediaExtended.css';

import { ICONS } from '../../../../assets/icons/index';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import { linkedInFooter } from '../../../../constant/app/workSpace/WorkSpace';
import Post from './Post';

export const AvatarIcon = [
  {
    id: 1,
    name: 'G',
    color: '#C837AB',
  },
];

const LinkedIn = ({ isLinkedin }) => {
  // const [inputValue, setInputValue] = useState('');

  return (
    <div className='linkedin-main-container'>
      <div className='facebook-container flex-row align-center '>
        <div className='linkedin-avatar flex-row align-center space-between pl-5 pr-5'>
          {AvatarIcon?.map((avatar) => (
            <Avatar
              key={avatar?.id}
              name={avatar?.name}
              style={{
                backgroundColor: avatar?.color,
                width: '28px',
                height: '28px',
                color: 'white',
                fontSize: '0.6vw',
              }}
            />
          ))}
          <div className='search-drawer-linkedin flex-row'>
            <img
              src={ICONS?.searchLightIcon}
              alt='search'
            />
            <span className='search-drawer-placeholder'>Search</span>
            {/* <input
              type='text'
              placeholder='search'
              // value={inputValue}
              // onChange={(e) => setInputValue(e.target.value)}
            /> */}
          </div>
          <img
            src={ICONS?.linkedInMessage}
            alt='linkedInMessage'
          />
        </div>
      </div>

      <div className='flex-row  align-center space-between  pt-5 pl-10'>
        <div className='linkedin-img flex-row '>
          {isLinkedin ? (
            <img
              src={ICONS?.linkedInAvatar}
              alt='linkedInAvatar'
              className='linkedInAvatar'
            />
          ) : (
            <img
              src={ICONS?.linkedinProfile}
              alt='linkedinProfile'
              className='linkedInAvatar'
            />
          )}
          <div className='flex-column'>
            <span className='instagram-header-title pl-5'>Grochew Grill</span>
            <span className='linkedin-status-content pl-5'> followers</span>
            <div className='flex-row'>
              <span className='linkedin-status-content1 pl-5'>Now.</span>
              <img
                src={ICONS?.worldIcon}
                alt='worldIcon'
                className='linkedin-world pl-5'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='linkedin-middle flex-column pt-5'>
        <p>
          Shapes are fundamental geometric figures defined by their outlines, boundaries, and
          characteristics. They play a crucial role in mathematics, art, design, and various other
          fields.
          <br />
          <span className='hashtag '>#hashtag #hashtag #hashtag</span>
        </p>
        <span className='translation pl-10 pt-5'>See translation</span>
        <div className='instagram-post'>
          <Post />
        </div>
      </div>
      <div className='linkedin-footer flex-row align-center space-between pl-10 pr-10 pt-5 pb-5'>
        {linkedInFooter?.map((item) => (
          <div
            key={item?.id}
            className='linkedin-footer-wrap flex-row align-center'>
            <img
              src={item?.icon}
              alt='facebook'
            />

            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedIn;
