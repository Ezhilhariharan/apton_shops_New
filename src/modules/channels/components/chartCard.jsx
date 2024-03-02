// import React from 'react';
// import { Card } from '../../../components/commonComponents/Cards/Card';
// import TitleAndDescription from '../../../components/commonComponents/Title/TitleAndDescription';

// const ChartCard = ({ header, isLegend, legend, children }) => {
//   return (
//     <div
//       style={{ border: '1px solid #F0F1F2', borderRadius: '10px' }}
//       className='w-100 h-100  flex-column gap-2'>
//       <div
//         className={`w-100 h-20 pt-10 pl-10 pr-10 flex-row  ${
//           isLegend ? 'space-between' : 'flex-start'
//         } `}>
//         <TitleAndDescription
//           title={header}
//           size={'medium'}
//         />
//         <div className='h-100'>{legend}</div>
//       </div>
//       {children}
//     </div>
//   );
// };
// export default ChartCard;

import React from 'react';
import '../styles/chartcard.css';

const ChartCard = ({ header, isLegend, legend, children }) => {
  return (
    <div className='flex-column chartContainer'>
      <div className={`w-100 h-20  flex-row  ${isLegend ? 'space-between' : 'flex-start'} `}>
        <div className='font-large weight-bold pl-5'style={{ color: 'var(--textBlack)'}}>{header}</div>
        <div className='h-100'>{legend}</div>
      </div>
      {children}
    </div>
  );
};
export default ChartCard;
