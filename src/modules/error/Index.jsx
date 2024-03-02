import React from 'react';
import './Index.css';

import { useNavigate } from 'react-router-dom';

import { images } from '../../assets/images/index';

import { Button } from '../../components/form/Button/Button';

function Index() {
  const navigate = useNavigate();
  return (
    <div className='errorWrapper flex-row'>
      <div className='left flex-row align-center justify-center'>
        <div>
          <div className='heading'>Something went wrong</div>
          <div className='content mt-10 pt-10'>
            we couldn’t find this page. Don’t let this stop you and keep browsing.
          </div>
          <div className='buttonWrapper'>
            <Button
              size='large'
              width={'100%'}
              label={'Back to Login'}
              onClick={() => navigate('/login')}
            />
          </div>
        </div>
      </div>
      <div className='right flex-row align-center justify-center'>
        <img
          src={images?.Error404}
          alt='Error'
          className='errorImg'
        />
      </div>
    </div>
  );
}

export default Index;
