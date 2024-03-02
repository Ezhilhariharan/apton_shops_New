import React, { useState } from 'react';
import './channels.css';
import '../../../modules/campaign/styles/campaignModal.css';

import { ICONS } from '../../../assets/icons/index';
import { activeChannels } from '../../../constant/app/appLayout';

import { Popover } from 'antd';

import Radio from '../../form/radio/RadioButton';

function ChannelList({ width, height }) {
  
  const [channelList, setChannelList] = useState(activeChannels);

  const selectingChannel = (item) => {
    setChannelList((prev) => {
      const newState = prev?.map((prevItem) => {
        if (prevItem?.channelName === item?.channelName) {
          return prevItem?.selected
            ? { ...prevItem, selected: false }
            : { ...prevItem, selected: true };
        } else {
          return { ...prevItem };
        }
      });
      return newState;
    });
  };

  const PopupContent = () => {
    return (
      <div className='listCardWrapper'>
        {channelList?.map((item) => (
          <div
            className='channels flex-row align-center space-between'
            onClick={() => selectingChannel(item)}>
            <div className='flex-row align-center'>
              <img
                src={item?.icon}
                alt='channel'
              />
              <div className='channelName'>{item?.channelName}</div>
            </div>

            <div className='pt-5'>{item?.selected && <Radio selected={true} />}</div>
          </div>
        ))}
      </div>
    );
  };
  // ==== 

  return (
    <div className='flex-row align-center'>
      {channelList
        ?.filter((item) => item?.selected)
        ?.slice(0, 3)
        ?.map((item) => (
          <div
            className='multipleIcons'
            key={item?.id}>
            <img
              src={item?.icon}
              alt={'assignee'}
              className='footerImgBig '
              style={{ width: width ? width : '35px', height: height ? height : '35px' }}
            />
          </div>
        ))}
      <Popover
        content={<PopupContent  />}
        trigger='click'>
        <img
          src={ICONS?.addBGtransparent}
          alt={'assignee'}
          className='footerImgBig '
          style={{ width: width ? width : '35px', height: height ? height : '35px' }}
        />
      </Popover>
    </div>
  );
}

export default ChannelList;
