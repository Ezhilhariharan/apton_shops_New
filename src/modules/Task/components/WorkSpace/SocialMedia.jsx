import React, { useState, useEffect } from 'react';
import '../../styles/WorkSpace/SocialMedia.css';

import { socialMedia } from '../../../../constant/app/workSpace/WorkSpace';
import { ICONS } from '../../../../assets/icons/index';
import ImageUploading from './ImageUploading';

import WorkArea from './WorkArea';
import FaceBook from './FaceBook';
import Instagram from './Instagram';
import WhatsappPreview from './WhatsappPreview';
import Whatsappcampigan from './Whatsappcampigan';
import LinkedIn from './LinkedIn';
import YouTube from './YouTube';
import Pintrest from './Pintrest';
import Twitter from './Twitter';
import { subFilter } from '../../../../constant/app/Filter/Filter';
import RadioButton from '../../../../components/form/radio/RadioButton';
import Channels from '../../../../components/commonComponents/channels/Channels';
import InstaReel from './InstaReel';
import { Popover } from 'antd';
import FacebookReel from './FacebookReel';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateTemplatePreview } from '../../../../reduxToolkit/CampaignSlice';

const SocialMedia = ({ handleClick, selected }) => {
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [isFacebook, setIsFacebook] = useState(true);
  const [isLinkedin, setIsLinkedin] = useState(true);

  const dispatch = useAspDispatch();

  useEffect(() => {
    dispatch(updateTemplatePreview({}));
  }, []);

  // const handleClick = () => {
  //   setPageNavigate('imageUploading');
  // };

  // const handleClick = (iconName) => {
  //   // setPageNavigate(iconName);
  //   if (iconName === 'facebook') {
  //     // setPageNavigate(iconName);
  //     setSelected(setSelected);
  //   }
  // };
  const handlePlusClick = () => {
    setChannelsOpen(!channelsOpen);
  };

  return (
    <div className='socialMedia-main-container'>
      <div className='socialMedia-container flex-row align-center space-between'>
        <div className='social-media-icons flex-row align-center '>
          {socialMedia?.map((item) => (
            <div
              className={`socialMedia-wrapper flex-row align-center space-between pointer  ${
                // selected === item?.name ? 'socialMedia-img-focused' : ''
                selected === 'whatsapp' ? 'socialMedia-img-focused' : ''
              }`}
              key={item?.id}>
              {item?.Originalname && (
                <span
                  className={`socialMedia-name flex-row align-center' ${
                    selected === 'Original' ? 'socialMedia-name-focused' : ''
                  }`}
                  onClick={() => handleClick(item?.name)}>
                  {item?.Originalname}
                </span>
              )}

              {item?.icon && (
                <div
                  className={`socialMedia-icon-container flex-row align-center ${
                    selected === item?.name ? 'selected1' : ''
                  }`}
                  onClick={() => handleClick(item?.name)}>
                  <img
                    src={item?.icon}
                    alt='socialMedia'
                  />
                  <span
                    className={`socialMedia-iconName  ${
                      selected === item?.name ? 'selected pl-5' : ''
                    }`}>
                    {item?.iconName}
                  </span>

                  <div
                    className={`cancelX  ${
                      selected === item?.name
                        ? 'selected2  ml-5 flex-row justify-center align-center'
                        : ''
                    }`}>
                    <img
                      src={item?.icon1}
                      alt='cancelX'
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* <div
            className='border-social-media'
            style={{ height: '40px' }}></div> */}
        <div>
          <Popover
            content={<Channels />}
            trigger='click'
            className=''>
            <div
              className='socialMedia-container-step3PlusIcon pointer'
              onClick={handlePlusClick}>
              <img
                src={ICONS?.step3PlusIcon}
                alt='socialMedia'
              />
            </div>
          </Popover>
        </div>
      </div>
      <div className='socialMedia-workarea1 flex-row '>
        <div className='socialMedia-workarea1-left '>
          {selected === 'Original' && <ImageUploading />}
          {/* {selected === 'facebook' && <FaceBook />} */}
          {/* {selected === 3 && <Instagram />} */}
          {selected === 'facebook' && <FacebookReel />}
          {selected === 'instagram' && <InstaReel />}
          {selected === 'linkedin' && <LinkedIn isLinkedin={isLinkedin} />}
          {selected === 'linkedinGroup' && <LinkedIn />}
          {selected === 'youtube' && <YouTube />}
          {selected === 'pinterest' && <Pintrest />}
          {selected === 'twitter' && <Twitter />}
          {selected === 'facebookGroup' && <FaceBook isFacebook={isFacebook} />}
          {selected === 'whatsapp' && <WhatsappPreview />}
        </div>
        <div className='socialMedia-workarea1-right'>
          {selected === 'whatsapp' ? <Whatsappcampigan /> : <WorkArea />}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
