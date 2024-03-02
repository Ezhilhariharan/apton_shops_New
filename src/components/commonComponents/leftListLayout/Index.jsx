import React, { useEffect, useState } from 'react';
import './Index.css';
import { useNavigate } from 'react-router-dom';

function Index({ list, activeNav = '', onSelect }) {
  // const [navList, setNavList] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   activeNav !== '' && setNavList(activeNav);
  // }, [activeNav]);

  // function Index({ list,onSelect }) {
  //   const [navList, setNavList] = useState([]);
  const handleItemClick = (item) => {
    // setNavList(item?.name);
    onSelect(item);
    item?.link && navigate(item?.link);
  };

  return (
    <div className='leftListLayout'>
      {list?.map((item) => (
        <div
          className={`listText ${activeNav === item?.name ? 'active-listText' : ''}`}
          // onClick={() => {
          //   setNavList(item?.name);
          //   setActiveList(item);
          // }}
          onClick={() => handleItemClick(item)}
          key={item?.id}>
          {item?.name}
        </div>
      ))}
    </div>
  );
}

export default Index;
