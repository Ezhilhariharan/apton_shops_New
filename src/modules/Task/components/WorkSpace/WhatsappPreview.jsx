import React from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { images } from '../../../../assets/images/index';
import { ICONS } from '../../../../assets/icons/index';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';

const WhatsappPreview = () => {
  const { templatePreview } = useAspSelector((state) => state.Campaign);

  return (
    <div className='image-main-container'>
      <img
        src={images?.BackgroundImage}
        alt='whatsappImage'
      />
      <div className='whiteBackgroundWhatsapp flex-column align-center '>
        {templatePreview?.components?.map((templateData) => {
          return (
            <>
              <div className='m-10'>
                {templateData?.type === 'HEADER' && templateData?.format === 'IMAGE' && (
                  <img
                    alt='imgPrev'
                    className='imagePreview '
                    src={templateData?.example?.header_handle[0]}
                  />
                )}
                {templateData?.type === 'HEADER' && templateData?.format === 'VIDEO' && (
                  <video
                    controls
                    className='videoPreview'>
                    <source
                      src={templateData?.example?.header_handle[0]}
                      type='video/mp4'
                    />
                  </video>
                )}
                {templateData?.type === 'HEADER' && templateData?.format === 'DOCUMENT' && (
                  <iframe
                    title='cover'
                    className='imagePreview'
                    src={templateData?.example?.header_handle[0]}
                    type='application/pdf'
                    width='100%'
                    height='150px'></iframe>
                )}
              </div>

              <div className='text-container'>
                {templateData?.type === 'HEADER' && templateData?.format === 'TEXT' && (
                  <span>{templateData?.text}</span>
                )}

                {templateData?.type === 'BODY' && (
                  <div>
                    <span>{templateData?.text}</span>
                  </div>
                )}
              </div>
              {/* <span className=''>12.30</span> */}
              {templateData?.buttons?.map((nestedButton) => (
                <div className='final-container'>
                  {nestedButton?.type === 'QUICK_REPLY' && (
                    <img
                      src={ICONS?.ReplayIcon}
                      alt='shareIcon'
                    />
                  )}
                  {nestedButton?.type === 'URL' && (
                    <img
                      src={ICONS?.nounLink}
                      alt='shareIcon'
                    />
                  )}
                  {nestedButton?.type === 'PHONE_NUMBER' && (
                    <img
                      src={ICONS?.call}
                      alt='shareIcon'
                    />
                  )}
                  {nestedButton?.type === 'COPY_CODE' && (
                    <img
                      src={ICONS?.CopyLeft}
                      alt='shareIcon'
                    />
                  )}

                  <p className='ml-5'>{nestedButton?.text}</p>
                </div>
              ))}
            </>
          );
        })}
      </div>
      {/* <div className='flex-column align-center '>
        <img
          src={images?.ContentImage}
          alt='whatsappImage'
          style={{
            width: '27vh',
            height: '30vh',
          }}
        />
        <div className='text-container'>
          <span> 🎅🎄 Christmas and New Year Combo Mela Offer! 🎉✨</span>
          <p>🎁 Offer Details: </p>
          <div>
            <span> Combo Meal for 4: Enjoy a festive spread for your family at just $49.99.</span>
          </div>
        </div>

        <span className=''>12.30</span>

        <div className='final-container'>
          <img
            src={ICONS?.ReplayIcon}
            alt='shareIcon'
          />
          <p>View offers</p>
        </div>
        <div className='final-container'>
          <p>Order now</p>
        </div>
      </div> */}
    </div>
  );
};
export default WhatsappPreview;
