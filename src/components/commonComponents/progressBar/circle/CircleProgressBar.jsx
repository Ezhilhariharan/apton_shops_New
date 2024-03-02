import React from 'react';

const CircleProgressBar = (props) => {
  const { progress, color } = props;

  const progressValue = progress > 0 ? progress : 0;
  const strokeArray = 74;
  const strokeProgress = progressValue / 100;
  const strokeOffset = strokeArray * strokeProgress;
  const strokeDashoffset = strokeArray - strokeOffset;

  return (
    <article className='w-[36px] h-[36px] relative'>
      <div className='w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#54577a] opacity-10'></div>
      <div className='w-[24px] h-[24px] rounded-full flex justify-center items-center bg-white z-20 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        {/* {progressValue}% */}
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='36px'
        height='36px'
        className='absolute top-0 left-0'>
        <circle
          cx='18'
          cy='18'
          r='12'
          // strokeLinecap='round'
          strokeDashoffset={strokeDashoffset}
          stroke={color}
          className=''
        />
      </svg>
      <style jsx>{`
        svg {
          stroke-dasharray: ${strokeArray};
          stroke-dashoffset: ${strokeArray};
          animation: circleAnimation 2s linear forwards;
          transform: rotate(-90deg);
          // stroke: ${color};
          stroke-width: 12px;
          fill: none;
        }

        @keyframes circleAnimation {
          100% {
            stroke-dashoffset: ${strokeDashoffset};
          }
        }
      `}</style>
    </article>
  );
};

export default CircleProgressBar;
