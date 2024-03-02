import React from 'react';

import { ICONS } from '../../../assets/icons/index';

function AuthBack({ onClick, title }) {
  return (
    <div className='back'>
      <img
        alt='arrowImage'
        className='arrow-image'
        src={ICONS.leftArrow}
      />
      <span
        className='backText'
        onClick={onClick}>
        {title}
      </span>
    </div>
  );
}

export default React.memo(AuthBack);
