import React, { useState } from 'react';
import './ListViewHeader.css';

import { ICONS } from '../../../assets/icons';

const ListViewSearch = ({ searchingText }) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const handleCancel = () => setInputValue('');

  const handleText = (val) => {
    setInputValue(val);
    searchingText(val);
  };

  return (
    <div className={`search-wrap ${isInputFocused ? 'input-focused' : ''}`}>
      <img
        src={ICONS?.searchIcon}
        alt='search'
      />
      {isInputFocused ? (
        <input
          type='text'
          placeholder='Search...'
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          onMouseOut={() => setInputFocused(false)}
          value={inputValue}
          onChange={(e) => handleText(e.target.value)}
        />
      ) : (
        <div
          className='additional-placeHolder'
          onClick={() => setInputFocused(true)}
          onMouseOver={() => setInputFocused(true)}
          onMouseOut={() => setInputFocused(false)}>
          {inputValue?.length > 0 ? inputValue : 'Search...'}
        </div>
      )}

      {inputValue !== '' && isInputFocused && (
        <div className={`exit-icon `}>
          <img
            src={ICONS?.popupX}
            alt='exit'
            onClick={handleCancel}
          />
        </div>
      )}
    </div>
  );
};

export default ListViewSearch;
