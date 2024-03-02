import React from 'react';
import '../../style/DashboardCenter.css';

import { images } from '../../../../assets/images';
import { Button } from '../../../../components/form/Button/Button';

const DashboardStep2 = () => {
  return (
    <div>
      <div className='step4-qr flex-row space-between'>
        <div className='left-qr'>
          <p>
            Be part of our dynamic growth community, connecting with driven achievers. Gain access
            to brilliant minds in the growth realm, unlocking unparalleled insights.
          </p>
          <div className='button-row flex-row align-center flex-end'>
            <h5 className='pointer'>Skip</h5>
            <Button
              size={'medium'}
              label={'Join Now'}
            />
          </div>
          <div className='follow-link'>
            <p>Follow us on</p>
            <div className='step4-images'>
              <img
                src={images?.facebookStep4}
                alt='qr'
              />
              <img
                src={images?.instagramStep4}
                alt='qr'
              />
              <img
                src={images?.youtubeStep4}
                alt='qr'
              />
            </div>
          </div>
        </div>
        <div className='right-qr flex-column align-center'>
          <img
            src={images?.qrCode}
            alt='qr'
          />
          <h4>Scan QR to join our community</h4>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DashboardStep2);
