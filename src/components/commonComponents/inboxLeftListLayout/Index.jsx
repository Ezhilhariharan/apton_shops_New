import React, { useState } from 'react';
import './Index.css';

function Index({ list, onSelect }) {
  const [navList, setNavList] = useState([]);
  const handleItemClick = (item) => {
    setNavList(item);
    onSelect(item);
  };
  return (
    <div className='inboxLeftListLayout'>
      {list?.map((item) => (
        <div
          className={`inboxlistText flex-row ${
            navList?.name === item?.name ? 'active-inboxlistText' : ''
          }`}
          onClick={() => handleItemClick(item)}
          key={item?.id}>
          <img
            src={item?.icon}
            alt='inbox'
          />
          <div
            className={`inboxlist flex-column pl-5 ${
              navList?.name === item?.name ? 'active-inboxlist' : ''
            }`}>
            <span>{item?.name}</span>
            <span>{item?.num}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
