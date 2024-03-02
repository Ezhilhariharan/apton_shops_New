import React from 'react';
import './Google.css';
import { ICONS } from '../../../assets/icons/index.js';

function Google() {
  return (
    <div className='google-card'>
      <img
        alt='googleImage'
        src={ICONS.googleIcon}
      />
      <p>Continue with Google</p>
    </div>
  );
}

export default Google;
