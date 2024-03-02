import React from 'react';
// import '../../styles/whatsappSearch/Whatsappsearch.css';
import '../../commonComponents/whatsappSearch/Whatsappsearch.css';
const WhatsappSearch = ({ placeholder, templateSearch }) => {
  return (
    <div className='search-container flex-row align-center'>
      <input
        type='text'
        placeholder={placeholder}
        onChange={templateSearch}
      />
    </div>
  );
};

export default WhatsappSearch;
