import React from 'react';
import '../styles/inboxExtended.css';

import { images } from '../../../assets/images';

const Empty = () => {
  return (
    <div className='inbox-empty-container flex-column align-center justify-center'>
      <img
        src={images?.inboxEmpty}
        alt='inboxEmpty'
      />
      <span>Your inbox is empty</span>
      <span>Begin your conversation by broadcasting messages to your customers.</span>
    </div>
  );
};

export default Empty;
