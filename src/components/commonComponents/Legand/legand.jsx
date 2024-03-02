import React from 'react';
import TitleAndDescription from '../Title/TitleAndDescription';
const Legend = ({ data }) => {
  return (
    <div class='flex-row my-auto '>
      {data?.map((d) => (
        <div className='flex-row  ' style={{marginLeft:'1vw'}}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: `${d?.color}`,
              borderRadius: '2px',
              
            }}
            className=' my-auto'></div>
          <TitleAndDescription
            size={'small'}
            title={`${d?.name} : ${d?.value}`}
            className={'my-auto capitalize'}
          />
        </div>
      ))}
    </div>
  );
};

export default Legend;
