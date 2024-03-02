// import React, { useState } from 'react';
// import { ChannelTabList } from '../../../constant/app/channel';
// import BroadCastTable from './BroadcastTable';
// import TemplateTable from './Templates';

// const ChannelTabView = () => {
//   const [switchingComponents, setSwitchingComponents] = useState(1);
//   return (
//     <div className='w-full h-screen '>
//       <div className='w-full flex align-center switchTab'>
//         {ChannelTabList?.map((item, id) => (
//           <React.Fragment key={item?.id}>
//             {id !== 0 && <span className='header-switching-line'></span>}
//             <div
//               className={`pointer ${
//                 switchingComponents === item?.id
//                   ? 'header-switching-button-wrapper-active'
//                   : 'header-switching-button-wrapper'
//               }
//         `}
//               onClick={() => setSwitchingComponents(item?.id)}>
//               <span
//                 className='header-switching-button-name'
//                 style={{
//                   color: `${
//                     switchingComponents === item?.id ? 'var(--TextPrimary)' : 'var(--textBlack)'
//                   }`,
//                 }}>
//                 {item?.name}
//               </span>
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//       {switchingComponents === 2 ? <BroadCastTable /> : <TemplateTable />}
//     </div>
//   );
// };

// export default ChannelTabView;

import React, { useState } from 'react';

import BroadCastTable from './BroadcastTable';
import TemplateTable from './Templates';

import { ChannelTabList } from '../../../constant/app/channel';

const ChannelTabView = () => {
  const [switchingComponents, setSwitchingComponents] = useState(1);
  return (
    <div className='waTableContainer'>
      <div className='w-full flex-row align-center switchTab'>
        {ChannelTabList?.map((item, id) => (
          <React.Fragment key={item?.id}>
            {id !== 0 && <span className='header-switching-line'></span>}
            <div
              className={`pointer ${
                switchingComponents === item?.id
                  ? 'header-switching-button-wrapper-active'
                  : 'header-switching-button-wrapper'
              }
        `}
              onClick={() => setSwitchingComponents(item?.id)}>
              <span
                className='header-switching-button-name'
                style={{
                  color: `${
                    switchingComponents === item?.id ? 'var(--TextPrimary)' : 'var(--textBlack)'
                  }`,
                }}>
                {item?.name}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
      {switchingComponents === 2 ? <BroadCastTable /> : <TemplateTable />}
    </div>
  );
};

export default ChannelTabView;
