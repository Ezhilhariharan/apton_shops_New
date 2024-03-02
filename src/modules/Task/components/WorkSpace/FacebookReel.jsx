import React from 'react';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import { Reels, facebookReels } from '../../../../constant/app/campaign/campaignReel';
import { AvatarIcon } from './FaceBook';
import { ICONS } from '../../../../assets/icons';

const FacebookReel = () => {
  return (
    <div className='reels-container flex-row align-center justify-center'>
      <div className='reels flex-row align-center justify-center'>
        {/* <video
          src=' https://storage.googleapis.com/asp-v1-images/videos/per2.mp4'
          alt='SelectedVideo'
          className=''
          // autoPlay
          // controls
        /> */}
        <video
          src=' https://storage.googleapis.com/asp-v1-images/videos/per.mp4'
          alt='SelectedVideo'
          className=''
          // autoPlay
          // controls
        />
        <div className='reel flex-row space-between'>
          <div className='reel-container flex-column flex-end pb-10 pl-10'>
            <div className='task-avatar flex-row align-center pb-10'>
              {AvatarIcon?.map((avatar) => (
                <div className='instagram-avatar  flex-row align-center justify-center flex-end'>
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
                <span className='reel-header-title pl-5'>Grochew Grill</span>
              </div>
            </div>
            <span className='reel-paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor numbas
              sator... more
            </span>
          </div>
          <div className='icons-wrapper flex-column align-center flex-end pr-5'>
            <div className='icons-wrapper-footer pb-5'>
              {facebookReels?.map((item) => (
                <div className='pb-10'>
                  <img
                    src={item?.icon}
                    alt='reels'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookReel;
