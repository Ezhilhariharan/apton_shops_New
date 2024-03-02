// import { Popover } from 'antd';
// import Search from 'antd/es/input/Search';
// import React, { useState } from 'react';
// import CampaignFilter from '../../../campaign/components/CampaignFilter';
// import { ICONS } from '../../../../assets/icons';
// import { Button } from '../../../../components/form/Button/Button';
// import { broadCastDetailTableHeader, broadCastUsers } from '../../../../constant/app/channel';
// import './style.css';
// import Avatar from '../../../../components/commonComponents/avatar/Avatar';
// import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';

// const avatarStyle = {
//   width: '40px',
//   height: '40px',
//   color: 'var(--textWhite)',
//   fontSize: '0.87vw ',
//   fontWeight: '400',
//   borderRadius: '50%',
// };

// const BroadCastView = () => {
//   const [showFilter, setShowFilter] = useState(false);
//   const [openFilter, setOpenFilter] = useState(false);
//   const columnLength = broadCastDetailTableHeader?.length;
//   const tdStyle = {
//     width: `calc(100% / ${columnLength})`,
//   };

//   return (
//     <div>
//       <div className='w-100'>
//         <div className='h-6 mt-2 ml-2 cursor-pointer flex-row gap-2 align-center'>
//           <img
//             src={ICONS?.BackArrow}
//             alt='back'
//           />
//           <TitleAndDescription
//             size='medium'
//             title='Setup an broadcast for campaign'
//           />
//         </div>
//         <div className='flex-row space-between m-3'>
//           <div className='w-40 flex-row'>
//             <Search />
//           </div>
//           <div className='flex-row'>
//             <span className='mr-10 my-auto'>
//               <Popover
//                 content={
//                   <CampaignFilter
//                     setOpenFilter={setOpenFilter}
//                     setShowFilter={setShowFilter}
//                   />
//                 }
//                 trigger='click'>
//                 {showFilter ? (
//                   <div
//                     className='border-2 rounded-xl firstList-wrap-active flex-row ml-10'
//                     onClick={() => setOpenFilter(!openFilter)}>
//                     <img
//                       src={ICONS.filterYellow}
//                       alt='list'
//                     />
//                     <span>2</span>
//                   </div>
//                 ) : (
//                   <div
//                     className='border-2 rounded-xl firstList-wrap'
//                     onClick={() => setOpenFilter(!openFilter)}>
//                     <img
//                       src={ICONS.filterIcon}
//                       alt='list'
//                     />
//                     <span>Filter</span>
//                   </div>
//                 )}
//               </Popover>
//             </span>
//           </div>
//         </div>
//         <div
//           className='w-100 mx-3 tableContainer'
//           style={{ background: 'var(--BG-25)' }}>
//           <table
//             className='px-3'
//             style={{
//               width: columnLength > 4 ? `${columnLength * 16}vw` : '100%',
//             }}>
//             <tr className='tableHeaderRow'>
//               {broadCastDetailTableHeader?.map((column) => (
//                 <th>{column?.name}</th>
//               ))}
//             </tr>
//             {broadCastUsers?.map((item, i) => {
//               return (
//                 <tr
//                   className='listRow'
//                   key={item?.id}
//                   onClick={() => {}}>
//                   <td>
//                     <div className='w-10'>
//                       <Avatar
//                         name={item?.firstName}
//                         style={{ background: item?.color, ...avatarStyle }}
//                       />
//                     </div>
//                   </td>
//                   <td style={tdStyle}>
//                     <div className='flex-row justify-center'>{item?.firstName}</div>
//                   </td>

//                   <td style={tdStyle}>
//                     <div className='flex-row justify-center '>{item?.lastName}</div>
//                   </td>

//                   <td style={tdStyle}>
//                     <div className='flex-row avatarRow justify-center'>{item?.contact}</div>
//                   </td>
//                   <td style={tdStyle}>
//                     <div className='flex-row justify-center '>
//                       <div
//                         style={{
//                           background: item?.backgroundColor,
//                           color: item?.color,
//                         }}
//                         className={`px-3 py-2 rounded-full `}>
//                         {item?.status}
//                       </div>
//                     </div>
//                   </td>
//                   <td style={tdStyle}>
//                     <div className='flex-row justify-center '>{item?.tags}</div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BroadCastView;

import { Popover } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState, useEffect } from 'react';
import CampaignFilter from '../../../campaign/components/CampaignFilter';
import { ICONS } from '../../../../assets/icons';
import { Button } from '../../../../components/form/Button/Button';
import {
  BROADCASTFILTER,
  broadCastDetailTableHeader,
  broadCastUsers,
} from '../../../../constant/app/channel';
import './style.css';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
import { icons } from 'antd/es/image/PreviewGroup';
import RadioButton from '../../../../components/form/radio/RadioButton';

import { broadcastTransactions } from '../../../campaign/api/Api';

import { useParams } from 'react-router-dom';

const FilterDropDown = ({ data, setFilterItem, filteritem }) => {
  const handleDropdownChange = (d, i) => {
    const checkFilter = filteritem?.filter((n) => n?.name === d?.name);
    if (!filteritem?.length) {
      setFilterItem([...filteritem, d]);
    } else {
      if (checkFilter?.length) {
        const RemoveFilter = filteritem?.filter((n) =>
          checkFilter?.some((s) => n?.name !== s?.name),
        );
        setFilterItem(RemoveFilter);
      } else {
        setFilterItem([...filteritem, d]);
      }
    }
  };

  return (
    <div className='filterdropdown'>
      <div className='filterLabel'>STATUS</div>
      {data?.map((brand, i) => (
        <div
          key={i}
          className='flex-row justify-between filterList'
          onClick={() => handleDropdownChange(brand, i)}>
          <div className='item-wrapper'>
            <div
              key={brand?.id}
              className='filterdropdownitem'>
              <h4>{brand?.name}</h4>
            </div>
          </div>
          {filteritem.filter((n) => brand?.name === n?.name)?.length ? (
            <RadioButton
              selected={true}
              style={{ heigh: '3px', width: '3px' }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};
const BroadCastView = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [filteritem, setFilterItem] = useState([]);
  const columnLength = broadCastDetailTableHeader?.length;
  const tdStyle = {
    width: `calc(100% / ${columnLength})`,
  };
  const [list, setList] = useState([]);

  let { broadCastId } = useParams();

  useEffect(() => {
    broadcastTransactions(broadCastId).then((res) => {
      if (res?.status === 200) {
        setList(res?.data?.response);
      }
    });
  }, [broadCastId]);

  const avatarStyle = {
    width: '40px',
    height: '40px',
    color: 'var(--textWhite)',
    fontSize: '0.87vw ',
    fontWeight: '400',
    borderRadius: '50%',
  };

  const updateStatus = (data) => {
    let status = '';
    switch (data) {
      case 4:
        status = 'Delivered';
        break;
      case 5:
        status = 'Seen';
        break;
      case 6:
        status = 'Lead';
        break;
      case 7:
        status = 'Sent';
        break;
      case 8:
        status = 'Processing';
        break;
      case -1:
        status = 'Bounce';
        break;
      default:
        status = 'Unknown';
        break;
    }
    return status;
  };
  return (
    <div>
      <div className='w-100'>
        <div className='h-6 mt-2 ml-2 cursor-pointer flex-row gap-2 align-center'>
          <img
            src={ICONS?.BackArrow}
            alt='back'
          />
          <TitleAndDescription
            size='medium'
            title='Setup an broadcast for campaign'
          />
        </div>
        <div className='flex-row space-between m-3'>
          <div className='w-40 flex-row'>
            <Search />
          </div>
          <div className='flex-row'>
            <span className='mr-10 my-auto'>
              <Popover
                content={
                  <FilterDropDown
                    data={BROADCASTFILTER}
                    setFilterItem={setFilterItem}
                    filteritem={filteritem}
                  />
                }
                trigger='click'>
                {showFilter ? (
                  <div
                    className='border-2 rounded-xl firstList-wrap-active flex-row ml-10'
                    onClick={() => setOpenFilter(!openFilter)}>
                    <img
                      src={ICONS.filterYellow}
                      alt='list'
                    />
                    <span>2</span>
                  </div>
                ) : (
                  <div
                    className='border-2 rounded-xl firstList-wrap'
                    onClick={() => setOpenFilter(!openFilter)}>
                    <img
                      src={ICONS.filterIcon}
                      alt='list'
                    />
                    <span>Filter</span>
                  </div>
                )}
              </Popover>
            </span>
          </div>
        </div>
        <div
          className='broadCastContainer'
          style={{ background: 'var(--BG-25)' }}>
          <table
            className='px-3'
            style={{
              width: '100%',
            }}>
            <tr className='broadCastHeaderRow'>
              {broadCastDetailTableHeader?.map((column) => (
                <th>{column?.name}</th>
              ))}
            </tr>
            {list?.map((item, i) => {
              return (
                <tr
                  className='listRow'
                  key={item?.id}
                  onClick={() => {}}>
                  <td>
                    <div className='w-10'>
                      <Avatar
                        name={item?.firstName}
                        style={{ background: item?.color, ...avatarStyle }}
                      />
                    </div>
                  </td>
                  <td style={tdStyle}>{item?.first_name ? item?.first_name : '-'}</td>

                  <td style={tdStyle}>{item?.last_name ? item?.last_name : '-'}</td>

                  <td style={tdStyle}>
                    <div className='flex-row avatarRow justify-center'>{item?.mobile_number}</div>
                  </td>
                  <td style={tdStyle}>
                    <div className='flex-row justify-center '>
                      <div
                        style={{
                          background: item?.backgroundColor,
                          color: item?.color,
                        }}
                        className={`px-3 py-2 rounded-full `}>
                        {updateStatus(item?.status)}
                      </div>
                    </div>
                  </td>
                  {/* <td style={tdStyle}>
                    <div className='flex-row justify-center '>
                      {item?.tags ? (
                        item?.tags
                      ) : (
                        <div
                          style={{ color: 'var(--channelToggleSwitch)' }}
                          className='flex-row justify-center align-center'>
                          <img
                            src={ICONS?.AddTag}
                            alt='addTag'
                            style={{ width: '30px', heigh: '30px' }}
                            className='mr-5'
                          />{' '}
                          Add Tags
                        </div>
                      )}
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};
export default React.memo(BroadCastView);
