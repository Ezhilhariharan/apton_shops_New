import React, { useState } from 'react';
import MiddleConnection from './MiddleConnection';
import SocialContent from './SocialContent';
import LatestNews from './LatestNews';

const OverviewMiddle = () => {
  const [whatsapp, setWhatsapp] = useState(true);

  return (
    <div className='overview-middle flex-column space-between'>
      <MiddleConnection />
      <SocialContent whatsapp={whatsapp} />
      <SocialContent />
      <LatestNews />
    </div>
  );
};

export default OverviewMiddle;
