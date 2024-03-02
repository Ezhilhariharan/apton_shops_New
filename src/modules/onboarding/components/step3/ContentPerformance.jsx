import React from 'react';

import ProgressBar from '../../../../components/commonComponents/progressBar/circle/CircleProgressBar';

function ContentPerformance({ item }) {
  return (
    <div className='contentPerformance'>
      <div className='flex-row align-center'>
        <img
          className='contentPerformanceIcons'
          src={item?.icon}
          alt={item?.name}
        />
        <h4 className='contentPerformanceName'>{item?.name} </h4>
      </div>
      <div
        className='flex-row align-center space-between '
        style={{ marginTop: '10px', marginBottom: '5px' }}>
        <div className='flex-row align-center '>
          <ProgressBar
            progress={item?.percentage}
            color={item?.color}
          />
          <span className='percentage'>{`${item?.percentage}%`} </span>
        </div>
        {item?.status?.map((data) => {
          return (
            data?.reaction === item?.activeReaction && (
              <div className='flex-row align-center status'>
                <img
                  src={data?.statusIcon}
                  alt={data?.reaction}
                />
                <p style={{ color: data?.statusColor }}>{data?.reaction} </p>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(ContentPerformance);
