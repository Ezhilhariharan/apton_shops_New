// import React, { useState } from "react";
// import Search from "../../../components/commonComponents/ListViewHeader/ListViewSearch";
// import { Popover } from "antd";
// import CampaignFilter from "../../../modules/campaign/components/CampaignFilter";
// import { ICONS } from "../../../assets/icons";
// import { Button } from "../../../components/form/Button/Button";
// import {
//   broadCastTableHeaderList,
//   broadCastData,
// } from "../../../constant/app/channel";
// import TableFirstColumn from "./TableFirstColumn";
// import LabelText from "../../../components/commonComponents/Label";
// import BroadcastFirstColumn from "./broadcastFirstColumn";

// const BroadCastTable = () => {
//   const [openFilter, setOpenFilter] = useState(false);
//   const [showFilter, setShowFilter] = useState(false);
//   const columnLength = broadCastTableHeaderList?.length;
//   const tdStyle = {
//     width: `calc(100% / ${columnLength})`,
//   };
//   return (
//     <div className="w-100">
//       <div className="flex-row space-between m-3">
//         <div className="w-40 flex-row">
//           <Search />
//         </div>
//         <div className="flex-row">
//           <span className="mr-10 my-auto">
//             {/* <Popover
//               content={
//                 <CampaignFilter
//                   setOpenFilter={setOpenFilter}
//                   setShowFilter={setShowFilter}
//                 />
//               }
//               trigger="click"
//             >
//               {showFilter ? (
//                 <div
//                   className="border-2 rounded-xl firstList-wrap-active flex-row ml-10"
//                   onClick={() => setOpenFilter(!openFilter)}
//                 >
//                   <img src={ICONS.filterYellow} alt="list" />
//                   <span>2</span>
//                 </div>
//               ) : (
//                 <div
//                   className="firstList-wrap"
//                   onClick={() => setOpenFilter(!openFilter)}
//                 >
//                   <img src={ICONS.filterIcon} alt="list" />
//                   <span>Filter</span>
//                 </div>
//               )}
//             </Popover> */}
//           </span>
//           <Button size={"medium"} label={"New broadcast"} onClick={() => {}} />
//         </div>
//       </div>
//       <div
//         className="w-100 mx-3 tableWrapper"
//         style={{ background: "var(--BG-25)" }}
//       >
//         <table
//           className="px-3"
//           style={{
//             width: columnLength > 4 ? `${columnLength * 13.2}vw` : "100%",
//           }}
//         >
//           <tr className="tableHeaderRow">
//             {broadCastTableHeaderList?.map((column) => (
//               <th>{column?.name}</th>
//             ))}
//           </tr>
//           {broadCastData?.map((item, i) => {
//             return (
//               <tr className="listRow" key={item?.id} onClick={() => {}}>
//                 <td style={tdStyle}>
//                   <BroadcastFirstColumn item={item} handleTableRow={() => {}} />
//                 </td>
//                 <td style={tdStyle}>
//                   <div className="flex-row justify-center">{item?.type}</div>
//                 </td>

//                 <td style={tdStyle}>
//                   <div className="flex-row justify-center ">
//                     {item?.prospects}
//                   </div>
//                 </td>

//                 <td style={tdStyle}>
//                   <div className="flex-row justify-center ">
//                     {item?.delivered}
//                   </div>
//                 </td>

//                 <td style={tdStyle}>
//                   <div className="flex-row avatarRow justify-center">
//                     {item?.opened}
//                   </div>
//                 </td>
//                 <td style={tdStyle}>
//                   <div className="flex-row justify-center ">{item?.lead}</div>
//                 </td>
//                 <td style={tdStyle}>
//                   <div className="flex-row justify-center ">
//                     {item?.bounced}
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </div>
//   );
// };
// export default BroadCastTable;

import React, { useState, useEffect } from 'react';

import { Popover } from 'antd';

import Search from '../../../components/commonComponents/ListViewHeader/ListViewSearch';
import CampaignFilter from '../../../modules/campaign/components/CampaignFilter';
import { Button } from '../../../components/form/Button/Button';

import { ICONS } from '../../../assets/icons';

import { useNavigate } from 'react-router-dom';

import { broadCastTableHeaderList, broadCastData } from '../../../constant/app/channel';
import BroadcastFirstColumn from './broadcastFirstColumn';

import { broadcastLists } from '../api/Api';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateGlobalLoader } from '../../../reduxToolkit/appSlice';

let count = 0;

const BroadCastTable = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [templateDetails, setTemplateDetails] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useAspDispatch();

  const columnLength = broadCastTableHeaderList?.length;

  const { currentBrand } = useAspSelector((state) => state.app);

  const fetchTemplateLists = (brandId, payload) => {
    if (brandId) {
      dispatch(updateGlobalLoader(true));

      broadcastLists(brandId, payload)
        .then((res) => {
          if (res?.status === 200) {
            setTemplateDetails((prevDetails) => [...prevDetails, ...res?.data?.response]);
            count = res?.data?.template_count;
            setPage(page + 1);
          }
        })
        .finally(() => {
          dispatch(updateGlobalLoader(false));
        });
    } else {
      setTemplateDetails([]);
    }
  };

  const loadNextPage = () => {
    fetchTemplateLists(currentBrand?.id, { page: page, limit: 10 });
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      loadNextPage();
    }
  };

  useEffect(() => {
    fetchTemplateLists(currentBrand?.id, { page: page, limit: 10 });
  }, []);


  const tdStyle = {
    width: `calc(100% / ${columnLength})`,
  };

  const navigateToBroadcast = (data) => {
    navigate(`/user/channels/whatsapp/broadcast/${data?.id}`);
  };

  return (
    <div className='w-100'>
      <div className='flex-row space-between mb-15 mt-15'>
        <div className='w-40 flex-row ml-20'>
          <Search />
        </div>
        <div className='flex-row'>
          <span className='mr-10'>
            <Popover
              content={
                <CampaignFilter
                  setOpenFilter={setOpenFilter}
                  setShowFilter={setShowFilter}
                />
              }
              trigger='click'>
              {showFilter ? (
                <div onClick={() => setOpenFilter(!openFilter)}>
                  <img
                    src={ICONS.filterYellow}
                    alt='list'
                  />
                  <span>2</span>
                </div>
              ) : (
                <div
                  className='firstList-wrap'
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
          <Button
            size={'medium'}
            label={'New broadcast'}
            onClick={() => navigate('create-template')}
          />
        </div>
      </div>
      <div
        className='w-100 templateTableWrapper'
        style={{ background: 'var(--BG-25)' }}
        onScroll={handleScroll}>
        <table
          style={{
            width: columnLength > 4 ? `${columnLength * 13.2}vw` : '100%',
            margin: 'auto',
          }}>
          <tr className='tableHeaderRow'>
            {broadCastTableHeaderList?.map((column) => (
              <th>{column?.name}</th>
            ))}
          </tr>
          {templateDetails?.map((item, i) => {
            return (
              <tr
                className='listRow'
                key={item?.id}
                onClick={() => navigateToBroadcast(item)}>
                <td style={tdStyle}>
                  <BroadcastFirstColumn
                    item={item}
                    handleTableRow={() => {}}
                  />
                </td>
                <td style={tdStyle}>
                  <div className='flex-row justify-center'>Broadcast</div>
                </td>

                <td style={tdStyle}>
                  <div className='flex-row justify-center '>{item?.prospects}</div>
                </td>

                <td style={tdStyle}>
                  <div className='flex-row justify-center '>{item?.delivered}</div>
                </td>

                <td style={tdStyle}>
                  <div className='flex-row avatarRow justify-center'>{item?.opened}</div>
                </td>
                <td style={tdStyle}>
                  <div className='flex-row justify-center '>{item?.lead}</div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default BroadCastTable;
