import React, { useState } from 'react';
import '../../style/DashboardRight.css';

import ChannelSwitch from './ChannelSwitch';
import Profile from './ChannelProfile';
import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
import { Card } from '../../../../components/commonComponents/Cards/Card';
import { PageFeatures } from './PageFeatures';
import { ChannelAction } from './ChannelAction';
import Divider from '../../../../components/commonComponents/divider/Divider';

import { channelName } from '../../../../constant/app/dashboard/Dashboard';
import {
  pageFeatures,
  businessFeatures,
  linkedinPageFeatures,
  linkedinProfileFeatures,
  pinterestFeatures,
} from '../../../../constant/app/dashboard/Dashboard';

import { ICONS } from '../../../../assets/icons/index';

function ChannelDetails() {
  const [activeChannel, setActiveChannel] = useState('Facebook');
  const [channelFeature, setChannelFeature] = useState(pageFeatures);

  const activatingChannel = (data) => {
    setActiveChannel(data?.channelName);
    switch (data?.channelName) {
      case 'Facebook':
        setChannelFeature(pageFeatures);
        break;
      case 'Instagram':
        setChannelFeature(businessFeatures);
        break;
      case 'Linkdin':
        setChannelFeature(linkedinPageFeatures);
        break;
      case 'Linkdin Profile':
        setChannelFeature(linkedinProfileFeatures);
        break;
      case 'Pinterest':
        setChannelFeature(pinterestFeatures);
        break;
      default:
        setChannelFeature();
    }
  };

  const refresh = () => {};

  return (
    <div className='channelDetailsWrapper'>
      <ChannelSwitch
        activatingChannel={activatingChannel}
        activeChannel={activeChannel}
      />
      <div className='borderPadding'>
        <Profile />
        <TitleAndDescription
          title='Page quality'
          size='medium'
          margin={'13px 0'}
        />
        <div className='channelActionWrapper'>
          {channelName?.map((item) => (
            <Card
              backgroundColor={'#F4F6F8'}
              borderRadius={'20px'}
              border={'none'}
              padding={'13px 16px'}
              title={item?.title}>
              <ChannelAction
                title={item?.title}
                image={item?.image}
                key={item?.id}
              />
            </Card>
          ))}
        </div>
        <div className='flex-row flex-Header'>
          <TitleAndDescription
            title='Steps to optimize'
            size='medium'
            margin={'13px 0 0 0'}
          />
          <img
            src={ICONS?.refresh}
            alt='refresh'
            className='refresh'
            onClick={() => refresh()}
          />
        </div>
      </div>
      <Divider
        color={'#E0E2E7'}
        width={'100%'}
      />
      <div className='channelActionFooterWrapper'>
        <div className='channelActionFooter'>
          {channelFeature?.map((item, id) => (
            <Card
              backgroundColor={'#F4F6F8'}
              borderRadius={'10px'}
              margin={'13px 0'}
              padding={'10px 15px'}
              border={'none'}
              title={item?.title}>
              <PageFeatures
                key={id}
                title={item?.title}
                image={item?.image}
                content={item?.content}
                label={item?.label}
                buttonColor={item?.buttonColor}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChannelDetails;
