import React, { useState } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { images } from '../../../../assets/images/index';
import { ICONS } from '../../../../assets/icons';

const AddProspects = ({ response }) => {
  const [cancelAction, setCancelAction] = useState(true);
  return (
    <>
      {cancelAction && (
        <div className='Add_prospects_container flex-row align-center'>
          <p>{response?.prospectsCount ? response?.prospectsCount : 0}</p>
          <span> Prospects added to the list</span>
        </div>
      )}
    </>
  );
};

export default AddProspects;
