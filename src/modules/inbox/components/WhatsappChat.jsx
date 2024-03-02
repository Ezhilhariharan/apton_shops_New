import React, { useState } from 'react';
import '../styles/inboxExtended.css';

import { images } from '../../../assets/images/index';
import { ICONS } from '../../../assets/icons/index';

const WhatsappChat = () => {
  const [openOrder, setOrderOpen] = useState(false);

  const handleClick = () => {
    setOrderOpen(true);
  };
  return (
    <div className='whatsapp-main-container flex-column space-between mb-10'>

      <div className='whatsapp-card flex-column align-center space-between'>
          <img
            src={images?.ContentImage}
          alt='whatsappImage'
          className='whatsapp-image'
          />

        <div className='whatsapp-text-container flex-column'>
          <span> 🎅🎄 Christmas and New Year Combo Mela Offer! 🎉✨</span>
          <span>🎁 Offer Details: </span>
          <div>
            Combo Meal for 4:{' '}
            <span className='text-container-combo'>
              Enjoy a festive spread for your family at just $49.99.
            </span>
          </div>
          <div>
            Party Pack:
            <span className='text-container-combo'>
              Enjoy a festive spread for your family at just $49.99.
            </span>
          </div>
        </div>

        <div
          className='whatsapp-final-container pointer'
          onClick={handleClick}>
          <img
            src={ICONS?.ReplayIcon}
            alt='shareIcon'
          />
          <p>View offers</p>
        </div>
        {openOrder && (
          <div className='final-container'>
            <p>Order now</p>
          </div>
        )}
      </div>
      <div className='whatsapp-card'>
        <span>hiii</span>
      </div>
    </div>
  );
};
export default WhatsappChat;
