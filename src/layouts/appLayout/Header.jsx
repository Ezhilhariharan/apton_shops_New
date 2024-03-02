import React, { useState } from 'react';
import './appLayout.css';
import '../../components/form/Button/Button.css';

import { ICONS } from '../../assets/icons/index';
import HeaderDropDown from '../../components/commonComponents/HeaderDropDown/HeaderDropDown';

function Header() {
  const [showActiveIcon, setShowActiveIcon] = useState(false);
  return (
    <header>
      <span className='header-container flex-row align-center'>
        <span className='appIcon'>
          G<span style={{ color: '#25C277' }}>X</span>
        </span>

        <div className=' appName-main flex-column justify-center  align-center '>
          <div className='appName'>Marketing</div>
          <div className='appName1'>Suite</div>
        </div>

        <span className='header-line' />
        <HeaderDropDown />
      </span>

      <span className='alignRight'>
        <button className='secondVariant'>Upgrade Now</button>
        {showActiveIcon ? (
          <img
            alt='notification'
            src={ICONS.notification}
            className='notification'
            onClick={() => setShowActiveIcon(!showActiveIcon)}
          />
        ) : (
          <img
            alt='notification'
            src={ICONS.notificationActive}
            className='notificationActive'
            onClick={() => setShowActiveIcon(!showActiveIcon)}
          />
        )}
        <img
          alt='help'
          src={ICONS.helpCircle}
          className='notification'
        />
      </span>
    </header>
  );
}

export default Header;
