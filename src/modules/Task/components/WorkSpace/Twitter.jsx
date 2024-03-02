import React from 'react';
import '../../styles/WorkSpace/SocialMediaExtended.css';

import { images } from '../../../../assets/images';
import { AvatarIcon } from './FaceBook';
import Verified from '../../../../assets/customSVG/Verified';

import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import { ICONS } from '../../../../assets/icons';
import { twitter } from '../../../../constant/app/workSpace/WorkSpace';
import Post from './Post';

const Twitter = () => {
  return (
    <div className='twitter-main-container flex-row pt-10'>
      <div className='pl-10'>
        {AvatarIcon?.map((avatar) => (
          <Avatar
            key={avatar?.id}
            name={avatar?.name}
            style={{
              backgroundColor: avatar?.color,
              width: '38px',
              height: '38px',
              color: 'white',
              fontSize: '1.3vw',
            }}
          />
        ))}
      </div>

      <div className='twitter-middle flex-column  pl-5'>
        <div className='flex-row  space-between pr-5'>
          <div className='flex-row'>
            <span className='twitter-header-title pl-5'>Grochew Grill</span>
            <div className='tick-verified pl-5'>
              <Verified
                style={{ width: '10px' }}
                color='#1DA1F2'
              />
            </div>
            <span className='title-name pl-5'>@gochewgrill</span>
          </div>
          <img
            src={ICONS?.menuVertical}
            alt='menuVertical'
            className='menuVertical2'
          />
        </div>

        <p>
          Shapes are fundamental geometric figures defined by their outlines, boundaries, and
          characteristics. They play a crucial role in mathematics, art, design, and various other
          fields.
        </p>
        <div className='twitter-post pt-5'>
          <Post />
        </div>
        <div className='flex-row align-center space-between pt-10 pr-10'>
          {twitter?.map((item) => (
            <div
              key={item?.id}
              className='twitter-icons pt-5'>
              <img
                src={item?.icon}
                alt='twitter'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Twitter;
