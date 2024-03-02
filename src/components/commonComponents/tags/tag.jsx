import React from 'react';

import Menu from '../../../assets/customSVG/Menu';
import Exit from '../../../assets/customSVG/Exit';

function tag({ item, setHover, hover, addTags, exitTags, tags,onClick }) {
  return (
    <span
      key={item?.id}
      className='tags space-between align-center'
      value={tags}
      style={{ background: item?.bg, color: item?.color }}
      onMouseEnter={() => setHover(item?.tags)}
      onMouseLeave={() => setHover('')}
      onClick={onClick}>
      {hover === item?.tags && (
        <span onClick={() => addTags(item)}>
          <Menu color={item?.color} />
        </span>
      )}
      {hover === item?.tags ? '' : item?.tags}
      {hover === item?.tags && (
        <span onClick={() => exitTags(item)}>
          <Exit color={item?.color} />
        </span>
      )}
    </span>
  );
}

export default tag;
