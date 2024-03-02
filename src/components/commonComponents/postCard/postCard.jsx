// import React from 'react';
// import './style.css';
// import { ICONS } from '../../../assets/icons';
// const PostCardList = ({ list, isHaveFullWidth = false }) => {
//   return (
//     <div className='grid grid-cols-4'>
//       <div
//         className={`mr-10 h-100 flex-row align-center justify-center pointer ${
//           !isHaveFullWidth ? 'w-auto ' : 'w-50 '
//         }  border-[1px] border-[var(--TextPrimary)] bg-[var(--primaryBackground)] rounded-lg text-[0.78vw] text-[var(--TextPrimary)] flex-row justify-center align-center`}>
//         <img
//           src={ICONS?.PostIcon}
//           alt='postIcon'
//           style={{ width: '18px', height: '18px', marginRight: '5px' }}
//         />
//         <div className='createPost'>Create Post</div>
//       </div>
//       {list?.length && (
//         <div className='col-span-3 w-100 border-[1px] rounded-lg flex-row overflow-hidden whitespace-nowrap'>
//           {list?.map((item, index) => (
//             <div
//               key={item?.id}
//               className={`w-1/3 m-1 p-1`}>
//               <div
//                 className={`flex-row align-center gap-2 ${item.id === 4 ? 'special-color' : ''}`}>
//                 <img
//                   src={item?.icon}
//                   style={{ width: '26px', height: '26px' }}
//                   alt='performance'
//                 />
//                 <div className='flex-row flex-center text-[0.85vw] font-medium text-[var(--textBlack)] flex-column'>
//                   <span class='text-[0.78vw] text-[var(--contentText)] font-medium'>
//                     {item?.title}
//                   </span>
//                   <span className='font-semibold'>{item?.content}</span>
//                 </div>
//                 {list?.length - 1 !== index && <span className='verticalLine mr-0'></span>}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default PostCardList;

import React from 'react';

import './style.css';

import { ICONS } from '../../../assets/icons';

const BrandStyle = {
  width: `calc(100% / 4)`,
};
const PostCardList = ({ list, isHaveFullWidth = false }) => {
  return (
    <div className=' '>
      {/* <div className='createPostBox flex-row'>
        <div className='flex-row align-center'>
          <img
            src={ICONS?.PostIcon}
            alt='postIcon'
            style={{ width: '18px', height: '18px' }}
          />
          <p> Create Post</p>
        </div>
      </div> */}

      <div
        className=' flex-row space-between align-center '
        style={{ width: '100% ' }}>
        {/* <div className='createPostBox flex-row '> */}
        <div className='createPostBox flex-row align-center'>
          <div style={{ paddingLeft: '6px' }}>
            <img
              src={ICONS?.PostIcon}
              alt='postIcon'
              style={{ width: '18px', height: '18px' }}
            />
          </div>
          <p> Create Post</p>
        </div>
        {/* </div> */}
        <div className='postMain-container  '>
          {list?.length && (
            <div className='tagCard flex-row space-between align-center '>
              {list?.map((item, index) => (
                <>
                  <div
                    key={item?.id}
                    className='flex-row space-between align-center '
                    style={{}}>
                    <div className='flex-row justify-center'>
                      <img
                        src={item?.icon}
                        style={{ width: '1.8vw', height: '1.8vw' }}
                        alt='performance'
                      />
                    </div>
                    <div
                      className='postCard-left flex-column  '
                      style={{ padding: '0px 10px' }}>
                      <span className=' '>{item?.title}</span>
                      <span className=''>{item?.content}</span>
                    </div>
                  </div>

                  <div className={` ${list?.length - 1 !== index ? 'borderRight' : ''}`} />
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* {list?.length && (
        <div className='tagCard'>
          {list?.map((item, index) => (
            <div
              key={item?.id}
              className={`tagList`}>
              <div className='flex-row align-center justify-center tagContent '>
                <img
                  src={item?.icon}
                  style={{ width: '34px', height: '34px' }}
                  alt='performance'
                />
                <div
                  className='flex-column flex-center tagText'
                  style={{ padding: '0px 12px' }}>
                  <span class='tagHeader'>{item?.title}</span>
                  <span className=''>{item?.content}</span>
                </div>
                <div className={` ${list?.length - 1 !== index ? 'borderRight' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};
export default PostCardList;
