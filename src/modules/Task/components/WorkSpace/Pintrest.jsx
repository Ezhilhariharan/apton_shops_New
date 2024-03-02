import React from 'react';
import '../../styles/WorkSpace/SocialMediaExtended.css';

import { ICONS } from '../../../../assets/icons';
import Post from './Post';

const Pintrest = () => {
  return (
    <div className='pintrest-main-container'>
      <div className='pintrest-head flex-column'>
        <div className='pintrest-post'>
          <Post />
        </div>

        <div className='pintrest-middle flex-row  align-center space-between'>
          <div className='pintrest-image flex-row '>
            <img
              src={ICONS?.youtubeImage}
              alt='youtubeImage'
            />
            <div className='flex-column pl-10'>
              <span className='pintrest-header-title'>Grochew Grill</span>

              <span className='pintrest-status-content'>Followers</span>
            </div>
          </div>
          <span className='follow'>Follow</span>
        </div>
        <p className='pintrest-p pl-10'>Lorem ipsum dolor sit amet consecte. Magna mi facilisi elemen</p>
        <p className='pintrest-p2 pt-10 pl-10'>
          Lorem ipsum dolor sit amet, consectetur adipi scing Quisque gravida blandit ligula a
          elementum. Cras
        </p>

        <div className='pintrest-footer flex-row align-center space-between p-10 mt-10'>
          <img
            src={ICONS?.instagramNotify}
            alt='instagramNotify'
          />
          <div className='flex-row align-center'>
            <span className='Visit'>Visit</span>
            <span className='Save ml-10'>Save</span>
          </div>
          <img
            src={ICONS?.Share}
            alt='instagramNotify'
          />
        </div>
      </div>
    </div>
  );
}

export default Pintrest