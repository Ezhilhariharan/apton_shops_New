import React, { useEffect, useState } from 'react';
import '../styles/inboxExtended.css';

import { images } from '../../../assets/images/index';
import { ICONS } from '../../../assets/icons/index';

const TemplatePreview = ({ selectedTemplate }) => {
  const [openOrder, setOrderOpen] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
  });

  return (
    <div className='template-image-main-container'>
      <img
        src={images?.BackgroundImage}
        alt='whatsappImage'
      />

      <div className='template-image-container flex-column align-center space-between'>
        <div className='template-image'>
          <img
            src={images?.ContentImage}
            alt='whatsappImage'
          />
        </div>

        {/* <div className='text-container flex-column'>
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
        </div> */}

        <div className='text-container flex-column'>
          <span>{selectedTemplate?.name}</span>
          <span>{selectedTemplate?.language}</span>
          <span>{selectedTemplate?.active}</span>
        </div>

        {openOrder.tab1 === true && (
          <div
            className='final-container pointer'
            onClick={() => {
              setOrderOpen({ ...openOrder, tab2: true });
            }}>
            <img
              src={ICONS?.ReplayIcon}
              alt='shareIcon'
            />
            <span >View offers</span>
          </div>
        )}
        {openOrder.tab2 === true && (
          <div
            className='final-container pointer'
            onClick={() => {
              setOrderOpen({ ...openOrder, tab3: true });
            }}>
            <span>Order now</span>
          </div>
        )}

        {openOrder.tab3 === true && (
          <div
            className='final-container pointer'
            onClick={() => {
              setOrderOpen({ ...openOrder, tab4: true, tab3: false });
            }}>
            <span>More Details</span>
          </div>
        )}
        {openOrder.tab4 === true && (
          <div
            className='final-container flex-row align-center pointer'
            onClick={() => {
              setOrderOpen({ ...openOrder, tab5: true });
            }}>
            <img
              src={ICONS?.inboxOptions}
              alt='inboxOptions'
            />
            <span>See all options</span>
          </div>
        )}
        {/* {openOrder.tab5 === true && (
          <div className='button-footer'>
            <span>All options</span>
            {inboxButtonList?.map((item) => (
              <div
                className='final-container1 flex-row mt-10 pointer'
                onClick={() => {
                  setOrderOpen({ ...openOrder, tab5: true });
                }}>
                <img
                  src={ICONS?.ReplayIcon}
                  alt='ReplayIcon'
                />
                <p>{item?.button}</p>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};
export default TemplatePreview;
