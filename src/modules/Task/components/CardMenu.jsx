import React from 'react';

import { ICONS } from '../../../assets/icons';
import { cardActionsList } from '../../../constant/app/campaign/campaignExtended';

import { Popover } from 'antd';

import DropDown from '../../../components/commonComponents/DropDown/DropDown';

function CardMenu() {
  const actions = () => {
    return (
      <>
        {cardActionsList?.map((item) => (
          <div
            key={item?.id}
            className='dropdown-1'>
            <DropDown
              iconPrefix={item?.icon}
              title={item?.name}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <Popover content={actions}>
        <img
          src={ICONS?.menuVertical}
          alt='cardActions'
        />
      </Popover>
    </div>
  );
}

export default CardMenu;
