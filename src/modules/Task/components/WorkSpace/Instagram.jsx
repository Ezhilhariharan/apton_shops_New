import React, { useState } from 'react';
import '../../styles/WorkSpace/SocialMediaExtended.css';

import { ICONS } from '../../../../assets/icons/index';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import { facebookMediaPost } from '../../../../constant/app/workSpace/WorkSpace';
import Post from './Post';

export const AvatarIcon = [
  {
    id: 1,
    name: 'G',
    color: '#C837AB',
  },
];

const Instagram = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleIconClick = (direction) => {
    const increment = direction === 'next' ? 1 : -1;
    const newStartIndex =
      (startIndex + increment + facebookMediaPost.length) % facebookMediaPost.length;
    setStartIndex(newStartIndex);
  };
  return (
    <div className='instagram-main-container'>
      <div className='instagram-container flex-row align-center space-between pl-5 pb-10'>
        <img
          src={ICONS?.instagramIcon}
          alt='instagramIcon'
          className='pt-5'
        />
        <div className='instagram-images flex-row align-center space-between pr-5'>
          <img
            src={ICONS?.instagramNotify}
            alt='instagramNotify'
          />
          <img
            src={ICONS?.instagramMessage}
            alt='instagramMessage'
          />
          <img
            src={ICONS?.instagramSetting}
            alt='instagramSetting'
          />
        </div>
      </div>
      <div className='instagram-avatar-border flex-row  align-center space-between p-10'>
        <div className='task-avatar flex-row '>
          {AvatarIcon?.map((avatar) => (
            <div className='instagram-avatar  flex-row align-center justify-center'>
              <Avatar
                key={avatar?.id}
                name={avatar?.name}
                style={{
                  backgroundColor: avatar?.color,
                  width: '27px',
                  height: '27px',
                  color: 'white',
                  fontSize: '0.8vw',
                }}
              />
            </div>
          ))}
          <div className='flex-column'>
            <span className='instagram-header-title pl-5'>Grochew Grill</span>

            <span className='instagram-status-content pl-5'>Chennai,India</span>
          </div>
        </div>
        <img
          src={ICONS?.menuVertical}
          alt='menuVertical'
          className='menuVertical'
        />
      </div>
      <div className='instagram-post flex-row align-center justify-center'>
        <Post />
      </div>
      <div className='instagram-middle flex-column'>
        <div className='instagram-footer  flex-row  space-between p-10'>
          <div className='instagram-footer  flex-row '>
            <img
              src={ICONS?.instagramNotify}
              alt='instagramNotify'
            />
            <img
              src={ICONS?.instagramComments}
              alt='instagramComments'
              className='ml-10'
            />
            <img
              src={ICONS?.instagramShare}
              alt='instagramShare'
              className='ml-10'
            />
          </div>

          <img
            src={ICONS?.instagramSave}
            alt='instagramSave'
          />
        </div>
        <div className='instagram-footer-content flex-column pr-10 pl-10'>
          {/* <span className='pl-10 pb-5'>2630 likes</span> */}
          <p>
            Shapes are fundamental geometric figures defined by their outlines, boundaries, and
            characteristics. They play a crucial role in mathematics, art, design, and various other
            fields.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
