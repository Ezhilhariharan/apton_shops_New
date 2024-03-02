import React from 'react'
import { ICONS } from '../../../assets/icons'

const Description = () => {
  return (
    <>
      <div className='taskDescription-container flex-row align-center'>
        <img
          src={ICONS?.TaskDescription}
          alt='TaskDescription'
        />
        <span>Description</span>
      </div>
      <div>
        <span className='description-gg'>Enter description / press space for GG</span>
      </div>
    </>
  );
}

export default Description