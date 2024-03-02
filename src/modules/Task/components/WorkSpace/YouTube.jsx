import React from 'react';
import '../../styles/WorkSpace/SocialMediaExtended.css';

import { youtube } from '../../../../constant/app/workSpace/WorkSpace';
import { ICONS } from '../../../../assets/icons';

import { AvatarIcon } from './LinkedIn';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import Post from './Post';

const YouTube = () => {
  return (
    <div className='youtube-main-container'>
      <div className='youtube-middle flex-column'>
        <div className='youtube-post'>
          <Post />
        </div>

        <span className='p-10'>
          Lorem ipsum dolor sit amet consectetur. Vitae morbi condimentum quam eu ipsum tincidunt.
        </span>
        <div className='flex-row pl-10'>
          <span className='view-youtube'> views . 1week ago</span>
          <span className='view-youtube pl-5'>Lorem ipsum dolor ... </span>
          <span className='view-youtube1'>more</span>
        </div>

        <div className='flex-row  align-center space-between p-10'>
          <div className='youtube-image flex-row '>
            <img
              src={ICONS?.youtubeImage}
              alt='youtubeImage'
            />
            <div className='flex-column pl-10'>
              <span className='youtube-header-title '>Grochew Grill</span>

              <span className='youtube-status-content'>subscribers</span>
            </div>
          </div>
          <span className='Subscribe'>Subscribe</span>
        </div>
        <div className='youtube-main-links flex-row align-center space-between pl-10 pr-10'>
          {youtube?.map((item) => (
            <div
              key={item?.id}
              className='youtube-links flex-row align-center space-between'>
              <img
                src={item?.icon}
                alt='youtube'
              />
              <span className='pl-5'>{item?.name}</span>
              {item?.icon1 && (
                <img
                  src={item?.icon1}
                  alt='youtube'
                  className='like-invert-icon ml-10'
                />
              )}
            </div>
          ))}
        </div>
        <div className='youtube-footer flex-column pl-10 pr-10 ml-10 mt-10'>
          <div className='youtube-footer1 flex-row space-between'>
            <div className='flex-row align-center'>
              <span className='youtube-comment'>Comments </span>
              {/* <span className='youtube-comment-count pl-10'>34</span> */}
            </div>
            <img
              src={ICONS?.WorkSpaceRight}
              alt='WorkSpaceRight'
            />
          </div>
          <div className='flex-row align-center mt-10'>
            {AvatarIcon?.map((avatar) => (
              <div className=''>
                <Avatar
                  key={avatar?.id}
                  name={avatar?.name}
                  style={{
                    backgroundColor: avatar?.color,
                    width: '16px',
                    height: '16px',
                    color: 'white',
                    fontSize: '0.6vw',
                  }}
                />
              </div>
            ))}
            <span className='Add-comment pl-5'>Add a comment...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
