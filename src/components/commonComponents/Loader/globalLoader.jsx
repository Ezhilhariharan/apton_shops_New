import React from 'react';
import './Index.css';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
// import {  } from '../../../reduxToolkit/appSlice';

function GlobalLoader() {
  const { globalLoader } = useAspSelector((state) => state.app);
  return (
    globalLoader && (
      <div className='globalLoaderWrapper flex-row align-center justify-center'>
        <div className='loadingio-spinner-ellipsis-twdnr17yzcs'>
          <div className='ldio-ngzhrv9xffn'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  );
}

export default GlobalLoader;
