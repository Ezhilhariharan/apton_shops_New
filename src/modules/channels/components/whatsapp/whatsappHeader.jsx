import React, { useEffect, useState } from 'react';

import { Tooltip, Modal, Popover } from 'antd';

import '../../styles/whatsappHeader.css';

import { Button } from '../../../../components/form/Button/Button';
import ChannelHeaderDropDown from '../../../../components/commonComponents/ChannelHeader';

import { ICONS } from '../../../../assets/icons';

import {
  FACEBOOK_ACCOUNT,
  FACEBOOK_GROUP_ACCOUNT,
  INSTAGRAM_ACCOUNT,
  LINKEDIN_ACCOUNT,
  LINKEDIN_PROFILE_ACCOUNT,
  PINTEREST_ACCOUNT,
  TWITTER_ACCOUNT,
  WHATSAPP_ACCOUNT,
} from '../../../../constant/app/channel';
import ModelComponent from '../../../../components/commonComponents/ModelComponent';
import AlertModal from '../../../../components/commonComponents/modal/alert/AlertModal';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateGlobalLoader } from '../../../../reduxToolkit/appSlice';

import { channelDisconnection } from '../../api/Api';

const maskStyle = { background: 'rgba(45, 48, 54, 0.25)' };

const ChannelHeader = ({ activeTab, setConnected }) => {
  const [accountInformation, setAccountInformation] = useState(FACEBOOK_ACCOUNT);
  const [platformImage, setPlatformImage] = useState(ICONS?.meta);
  const [miniImage, setMiniImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { channelList } = useAspSelector((state) => state?.Channel);
  const dispatch = useAspDispatch();

  useEffect(() => {
    if (activeTab === 'Facebook Pages') {
      setAccountInformation(FACEBOOK_ACCOUNT);
      setPlatformImage(ICONS?.meta);
      setMiniImage(ICONS?.facebookSquareIcon);
    }
    if (activeTab === 'WhatsApp') {
      setAccountInformation(WHATSAPP_ACCOUNT);
      setPlatformImage(ICONS?.Whatsapp);
      setMiniImage(null);
    }
    if (activeTab === 'Facebook Groups') {
      setAccountInformation(FACEBOOK_GROUP_ACCOUNT);
      setPlatformImage(ICONS?.facebookSquareIcon);
      setMiniImage(ICONS?.faceBookGrpupIcon);
    }
    if (activeTab === 'Twitter') {
      setAccountInformation(TWITTER_ACCOUNT);
      setPlatformImage(ICONS?.twitterSquareIcon);
      setMiniImage(null);
    }
    if (activeTab === 'Instagram') {
      setAccountInformation(INSTAGRAM_ACCOUNT);
      setPlatformImage(ICONS?.meta);
      setMiniImage(ICONS?.instagramSquareIcon);
    }
    if (activeTab === 'Pinterest') {
      setAccountInformation(PINTEREST_ACCOUNT);
      setPlatformImage(ICONS?.pinterestSquareIcon);
      setMiniImage(null);
    }
    if (activeTab === 'Linkedin Pages') {
      setAccountInformation(LINKEDIN_ACCOUNT);
      setPlatformImage(ICONS?.linkedinSquareIcon);
      setMiniImage(null);
    }
    if (activeTab === 'Linkedin Profile') {
      setAccountInformation(LINKEDIN_PROFILE_ACCOUNT);
      setPlatformImage(ICONS?.linkedinSquareIcon);
      setMiniImage(null);
    }
  }, [activeTab]);

  const disconnectChannel = () => {
    dispatch(updateGlobalLoader(true));
    const selectedTab = channelList?.filter((item) => item?.name == activeTab);
    selectedTab?.length > 0 &&
      channelDisconnection(selectedTab[0]?.apiData?.id).then((res) => {
        dispatch(updateGlobalLoader(false));
        if (res.status === 200) {
          setIsModalOpen(!isModalOpen);
          setConnected(false);
        }
      });
  };

  return (
    <div className='whatsappHeader'>
      <ChannelHeaderDropDown
        Image={platformImage}
        accountInformation={accountInformation}
        miniImage={miniImage}
        isTagMenu={activeTab === 'WhatsApp' || activeTab === 'Facebook Pages'}
        activeTab={activeTab}
      />

      {activeTab === 'WhatsApp' && (
        <div
          className='flex-row space-between '
          style={{ width: '30%' }}>
          <div className='limitsAndRatings'>
            <div
              style={{ color: 'var(--font-600)' }}
              className='font-xs weight-semibold'>
              Quality rating
            </div>
            <div className='flex'>
              <div className=' greenMark ' />
              <div className='font-large weight-bold'>High</div>
            </div>
          </div>
          <div className='limitsAndRatings'>
            <div className='flex items-center gap-1'>
              <div
                style={{ color: 'var(--font-600)' }}
                className='font-xs weight-semibold'>
                Meta message limit
              </div>
              <Tooltip title='Limit will be reset after 24hrs'>
                <img
                  className='w-4 h-4'
                  src={ICONS?.InfoIcon}
                  alt='info'
                />
              </Tooltip>
            </div>
            <div className='font-large weight-bold'>200</div>
          </div>
        </div>
      )}
      <Button
        iconPrefix={ICONS?.DisconnectIcon}
        onClick={() => setIsModalOpen(!isModalOpen)}
        className='disconnectButton'
        size={'medium'}
        label={'Disconnect'}
      />
      {/* <Modal
        open={isModalOpen}
        footer={null}
        className={'asp-modal-popup-small'}
        closable={false}
        maskStyle={maskStyle}
        centered={true}
        onCancel={disconnectChannel}>
        <AlertModal
          handleCancel={() => setIsModalOpen(false)}
          handleYes={() => setIsModalOpen(!isModalOpen)}
          handleNo={() => disconnectChannel()}
          content='Are you sure you want to disconnect?'
          yesName='no'
          noName='Yes'
        />
      </Modal> */}
      <ModelComponent
        isOpen={isModalOpen}
        handleCancel={() => setIsModalOpen(!isModalOpen)}>
        <div className='flex-column align-center deleteTemplateContainer'>
          <img
            style={{ width: '36px', height: '36px' }}
            src={ICONS?.HighAlert}
            alt='alert'
          />
          <div className='font-large weight-medium mt-10'>Are you sure you want to disconnect?</div>
          <div className='flex-row space-around mt-10 w-40'>
            <Button
              className='btn cancelBtn'
              primary={false}
              size={'medium'}
              label={'No'}
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
            <Button
              size={'medium'}
              label={'Yes'}
              onClick={() => disconnectChannel()}
            />
          </div>
        </div>
      </ModelComponent>
    </div>
  );
};

export default ChannelHeader;
