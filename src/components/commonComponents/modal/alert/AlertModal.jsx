import React from 'react';

import { ICONS } from '../../../../assets/icons/index';
import { Button } from '../../../form/Button/Button';

function AlertModal({ handleCancel, handleYes, handleNo, content, yesName, noName }) {
  return (
    <div className='alertInfoWrapper'>
      <div className='header w-100 flex-row align-center flex-end'>
        <img
          className='mr-10 close pointer'
          src={ICONS.popupX}
          alt='popup'
          onClick={handleCancel}
        />
      </div>
      <div className='body flex-column justify-center'>
        <img
          className='alert pointer'
          src={ICONS.AlertIcon}
          alt='popup'
        />
        <div className='mt-10 content'>{content}</div>
        <div className='flex-row mt-10 pt-10 mb-10 pb-10 align-center'>
          <div
            className='mr-10 noButton pointer'
            onClick={() => handleNo()}>
            {yesName}
          </div>
          <Button
            label={noName}
            size={'medium'}
            onClick={() => handleYes()}
          />
        </div>
      </div>
    </div>
  );
}

export default AlertModal;
