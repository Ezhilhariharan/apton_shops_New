import React, { useEffect } from 'react';
import './toast.css';

import Toast from './ToastMain';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateToggleToast } from '../../../reduxToolkit/appSlice';

function ToastWrapper() {
  const dispatch = useAspDispatch();
  const { toggleToast } = useAspSelector((state) => state.app);

  const handleClick = (data) => {
    const filtered = toggleToast?.filter((item) => item?.id !== data?.id);
    dispatch(updateToggleToast(filtered));
  };

  useEffect(() => {
    let interval;
    if (toggleToast?.length > 0) {
      interval = setInterval(() => {
        let filtered = toggleToast.slice(1);
        dispatch(updateToggleToast(filtered));
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [toggleToast]);

  return (
    <div className='ToastWrapper'>
      {toggleToast?.map((item) => (
        <Toast
          message={item?.content}
          type={item?.status}
          item={item}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default ToastWrapper;
