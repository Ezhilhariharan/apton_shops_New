import React, { useState } from 'react';
import './Index.css';

import { ICONS } from '../../../assets/icons/index';
import useAssignee from '../../../hooks/useAssignee';

import RadioButton from '../../form/radio/RadioButton';
import Avatar from '../avatar/Avatar';

const avatarStyle = {
  width: '23px',
  height: '23px',
  color: 'var(--textWhite)',
  fontSize: '0.6vw ',
  fontWeight: '400',
  borderRadius: '50%',
};

function AssigneePopover({ handleClose, selectingFromParent }) {
  const [inputValue, setInputValue] = useState('');
  const [assigneeList, SelectList] = useAssignee();

  const addAssignee = (item) => {
    selectingFromParent(item);
    SelectList(item);
  };
  return (
    <div className='assigneeWrapper'>
      <div className='drawer-header'>
        <span>Assignees</span>
        <img
          src={ICONS.popupX}
          alt='popupX'
          onClick={handleClose}
        />
      </div>
      <div className='search-drawer'>
        <img
          src={ICONS?.searchLightIcon}
          alt='search'
        />
        <input
          type='text'
          placeholder='search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className='list-drawer'>
        {assigneeList
          ?.filter((item) => item?.name?.toLowerCase()?.includes(inputValue?.toLowerCase()))
          ?.map((item) => (
            <div key={item?.id}>
              <div
                className='list-drawer-wrapper'
                onClick={() => addAssignee(item)}>
                <div className='drawer-list'>
                  <div className='drawer-initial'>
                    <Avatar
                      name={item?.name}
                      style={{ background: item?.bg, ...avatarStyle }}
                    />
                  </div>
                  <span className='list-drawer-wrap'>
                    <span>{item?.name}</span>
                    <span>{item?.task}</span>
                  </span>
                </div>

                {item?.selected && <RadioButton selected={true} />}
              </div>
              <hr className='drawer-line' />
            </div>
          ))}
      </div>
    </div>
  );
}

export default AssigneePopover;
