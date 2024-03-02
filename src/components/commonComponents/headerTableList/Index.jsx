import React from 'react';
import './Index.css';

import Radio from '../../form/radio/RadioButton';

function Index({ list, setSelectedList }) {
  return (
    <div className='tableColumnList'>
      {list?.filter((item) => item?.selected)?.length > 0 && (
        <div className='headerCategory'>Show columns</div>
      )}

      {list?.map((item) => {
        return (
          item?.selected && (
            <div
              className='flex-row align-center space-between headerList'
              onClick={() => setSelectedList(item)}
              key={item?.id}>
              <div className='flex-row align-center'>
                <img
                  alt={item?.name}
                  src={item?.icon}
                />
                <div className='headerName'> {item?.name}</div>
              </div>

              <Radio selected={item?.selected} />
            </div>
          )
        );
      })}
      {list?.filter((item) => !item?.selected)?.length > 0 && (
        <div className='headerCategory'>Other columns</div>
      )}

      {list?.map((item) => {
        return (
          !item?.selected && (
            <div
              className='flex-row align-center space-between headerList'
              onClick={() => setSelectedList(item)}
              key={item?.id}>
              <div className='flex-row align-center'>
                <img
                  alt={item?.name}
                  src={item?.icon}
                />
                <div className='headerName'> {item?.name}</div>
              </div>

              <Radio selected={item?.selected} />
            </div>
          )
        );
      })}
    </div>
  );
}

export default React.memo(Index);
