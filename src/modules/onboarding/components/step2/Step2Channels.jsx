import React, { useState } from 'react';
import '../../style/DashboardCenter.css';

import { Step2Channel } from '../../../../constant/app/dashboard/DashboardExtended';
import { ICONS } from '../../../../assets/icons/index';

import { Modal } from 'antd';

import { Button } from '../../../../components/form/Button/Button';
import Step2Popup from './Step2Popup';
import RadioButton from '../../../../components/form/radio/RadioButton';

import { useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateSteps } from '../../../../reduxToolkit/dashboardSlice';

const Step2Channels = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const dispatch = useAspDispatch();

  const showModal = (channel) => {
    setSelectedChannel(channel);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClick = () => {
    setSelectedChannel(true);
  };

  return (
    <>
      <div className='recmnd-videos'>
        <img
          src={ICONS.starIcon}
          alt='star'
        />
        <p>Recommended Channels</p>
      </div>

      <div className='step2channel'>
        {Step2Channel?.map((item, id) => (
          <div
            className='channel-container'
            key={id}
            onClick={() => showModal(item)}>
            <img
              src={item.image}
              alt='channels'
            />
            <div className='channel-wrapper'>
              <div className='channel-wrap'>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <div className='channel-radio'>
                <RadioButton
                  onClick={onClick}
                  selected={selectedChannel === item}
                  style={{ width: 15, height: 15 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='channel-btn'>
        <Button
          label={`Next`}
          size='small'
          onClick={() => dispatch(updateSteps(3))}
        />
      </div>

      <Modal
        open={isModalVisible}
        footer={null}
        className='custom-modal-popup'
        closable={false}>
        <div className='popup-wrapper'>
          <div className='popup-wrap'>
            <h2>Select a page</h2>
            <img
              src={ICONS.step2PopupIcon}
              alt='popup'
            />
          </div>
          <img
            src={ICONS.popupX}
            alt='x'
            onClick={handleCancel}
          />
        </div>

        <Step2Popup />

        <footer>
          <button className='popup-btn'>Create New</button>

          <Button
            label={'Done'}
            size={'small'}
          />
        </footer>
      </Modal>
    </>
  );
};

export default Step2Channels;
