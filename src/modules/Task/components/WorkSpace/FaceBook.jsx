import React, { useState } from 'react';
import '../../styles/WorkSpace/SocialMediaExtended.css';

import { faceBookFooter } from '../../../../constant/app/workSpace/WorkSpace';
import { ICONS } from '../../../../assets/icons/index';

import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import Post from './Post';

export const AvatarIcon = [
  {
    id: 1,
    name: 'G',
    color: '#7E80DB',
  },
];

const FaceBook = ({ isFacebook }) => {
  return (
    <div className='facebook-main-container'>
      <div className='facebook-container flex-row align-center space-between'>
        <img
          src={ICONS?.faceBookIcon}
          alt='faceBookIcon'
        />
        <div className='facebook-images flex-row align-center space-between'>
          <img
            src={ICONS?.faceBookSearch}
            alt='faceBookSearch'
          />
          <img
            src={ICONS?.faceBookMessage}
            alt='faceBookMessage'
          />
        </div>
      </div>
      <div className='flex-row p-10'>
        <div className='task-avatar'>
          {AvatarIcon?.map((avatar) => (
            <Avatar
              key={avatar?.id}
              name={avatar?.name}
              style={{
                backgroundColor: avatar?.color,
                width: '30px',
                height: '30px',
                color: 'white',
                fontSize: '1vw',
              }}
            />
          ))}
        </div>
        <div className='facebook-header  flex-column'>
          <div className=' flex-row align-center'>
            {isFacebook ? (
              <div className='flex-column'>
                <span className='facebook-header-content1  flex-column '>
                  <div className='flex-row pl-5'>
                    Grochew Grill
                    <img
                      src={ICONS?.FaceBookGroupCaret}
                      alt='FaceBookGroupCaret'
                      className='FaceBookGroupCaret ml-5 mr-5'
                    />
                    Grochew Grill
                    <img
                      src={ICONS?.menuVertical}
                      alt='menuVertical'
                      className='menuVertical1'
                    />
                  </div>
                  <div className=' flex-row align-center pl-5'>
                    <span className='facebook-group-status'>Just now .</span>
                    <img
                      src={ICONS?.worldIcon}
                      alt='worldIcon'
                      className='facebook-group-status-icon pl-5'
                    />
                  </div>
                </span>
              </div>
            ) : (
              <div className='flex-column'>
                <div className='flex-row space-between'>
                  <span className='facebook-header-content pl-5'>
                    Grochew Grill is at Chennai Marina
                  </span>
                  <img
                    src={ICONS?.menuVertical}
                    alt='menuVertical'
                    className='menuVertical'
                  />
                </div>
                <div className='facebook-status flex-row align-center pl-5'>
                  <span>Just now .</span>
                  <img
                    src={ICONS?.worldIcon}
                    alt='worldIcon'
                    className='pl-5'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='facebook-middle flex-column'>
        <p>
          Shapes are fundamental geometric figures defined by their outlines, bound . . . See more
          <br />
          <span className='hashtag'>#hashtag #hashtag #hashtag</span>
        </p>
        <div className='instagram-post'>
          <Post />
        </div>
      </div>
      <div className='faceBook-footer flex-row align-center space-between p-10'>
        {faceBookFooter?.map((item) => (
          <div
            key={item?.id}
            className='faceBook-footer-wrap flex-row align-center'>
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

export default FaceBook;
