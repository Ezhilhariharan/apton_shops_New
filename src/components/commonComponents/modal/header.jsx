import React from 'react';
import './modal.css';

import { ICONS } from '../../../assets/icons/index';

function header({ handleCancel, title }) {
  return (
    <div className='popup-header flex-row align-center space-between'>
      {title && <h2 className='popup-header-text'>{title}</h2>}
      <img
        className='popup-exit pointer'
        src={ICONS.popupX}
        alt='popup'
        onClick={handleCancel}
      />
    </div>
  );
}

export default React.memo(header);
