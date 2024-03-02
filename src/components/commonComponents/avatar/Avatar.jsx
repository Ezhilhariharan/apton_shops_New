import React from 'react';
import './avatar.css';

import { ICONS } from '../../../assets/icons/index';

function Avatar({ src, alt, style, name, onClick, className }) {
  return (
    <>
      {name ? (
        <div
          className='nameAvatar flex-column align-center justify-center'
          style={style}
          onClick={onClick}>
          <div className='name'>{name?.slice(0, 2)}</div>
        </div>
      ) : (
        <img
          src={src ? src : ICONS.defaultAvatar}
          className={`avatar ${className}`}
          alt={alt}
          style={style}
          onClick={onClick}
        />
      )}
    </>
  );
}

export default React.memo(Avatar);
