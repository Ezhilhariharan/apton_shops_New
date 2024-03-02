import React from 'react';

function divider({ color, width }) {
  return <div style={{ backgroundColor: color, height: '1px', width: width }} />;
}

export default divider;
