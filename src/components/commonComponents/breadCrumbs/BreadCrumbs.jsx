import React from 'react';
import './BreadCrumbs.css';

import SpeakerPhone from '../../../assets/customSVG/SpeakerPhone';

const BreadCrumbs = ({ data }) => {
  return (
    <div className='bread-crumbs-wrapper flex-row align-center  pl-10 '>
      {data?.map((item) => (
        <div
          key={item?.id}
          className='bread-crumbs-wrap flex-row align-center pl-10'>
          {item?.icon && (
            <img
              src={item?.icon}
              alt='icon'
            />
          )}
          {item?.svg === 'SpeakerPhone' && <SpeakerPhone />}
          <span>{item?.name}</span>
          {item?.icon1 && (
            <img
              src={item?.icon1}
              alt='icon1'
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
