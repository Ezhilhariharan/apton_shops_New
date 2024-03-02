import React, { useState } from 'react';
import '../styles/inbox.css';

import { Button } from '../../../components/form/Button/Button';
import { ICONS } from '../../../assets/icons';

import { Modal } from 'antd';

import TemplatePopover from './TemplatePopover';

const MiddleFooter = ({ onCancel }) => {
  const [value, setValue] = useState('');

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const initialText = `Write reply`;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleIconClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className='inbox-middle-footer'>
      <div className='inbox-textarea-button align-center '>
        <div className='inbox-middle-footer-wrap flex-column space-between'>
          <textarea
            placeholder={initialText}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className='Textwrapper1 flex-row align-center flex-end'>
            <img
              src={ICONS?.inboxTemplateIcon}
              alt='dueDate'
              onClick={handleIconClick}
            />
            <Button
              size={'xxm'}
              iconSuffix={ICONS.sendIcon}
              // onClick={handleDetailsClick}
            />
          </div>
        </div>

        {/* <div className='inbox-choosing-template flex-column align-center justify-center'>
            <span>Your conversation has been closed. </span>
            <span>Start conversation with a template</span>
            <Button
              label={'Choose template'}
              size={'medium'}
            />
          </div> */}

        <Modal
          open={isModalVisible}
          className={'asp-modal-popup-small1'}
          footer={null}
          closable={false}
          centered={true}
          onCancel={handleCancel}>
          {
            <TemplatePopover
              handleCancel={handleCancel}
              onCancel={onCancel}
            />
          }
        </Modal>
      </div>
    </div>
  );
};

export default MiddleFooter;
