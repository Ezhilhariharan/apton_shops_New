import React, { useState, useMemo, useEffect } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { ICONS } from '../../../../assets/icons/index';

import WhatsappSearch from '../../../../components/commonComponents/whatsappSearch/WhatsappSearch';
import { ExistingList } from '../../../../constant/app/campaign/campaignExtended';

import FileDownload from './FileDownload';
import RadioButton from '../../../../components/form/radio/RadioButton';

import CheckBox from '../../../../components/form/checkBox/checkBox';

import { prospectsLists } from '../../../channels/api/Api';

import { updateGlobalLoader } from '../../../../reduxToolkit/appSlice';
import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';

const Existing = ({ campaignId, setResponse, response }) => {
  const [file, setFile] = useState();
  const [prospectsList, setProspectsList] = useState([]);
  const [apiList, setApiList] = useState([]);

  const dispatch = useAspDispatch();

  const fileDownloadComponent = useMemo(() => {
    return (
      file && (
        <FileDownload
          fileName={response?.fileName}
          prospects={response?.prospectsCount}
        />
      )
    );
  }, [file]);

  const handleClick = (dataId) => {
    setFile(dataId?.file_name);
    setResponse({
      ...response,
      file_path: dataId?.url,
      fileName: dataId?.file_name,
      prospectsCount: dataId?.prospects_count,
    });
  };

  useEffect(() => {
    dispatch(updateGlobalLoader(true));
    prospectsLists(campaignId)
      .then((res) => {
        if (res?.status === 200) {
          dispatch(updateGlobalLoader(false));
          setProspectsList(res?.data);
          setApiList(res?.data);
        }
      })
      .finally(() => {
        dispatch(updateGlobalLoader(false));
      });
  }, []);

  // const selected = (e) => {
  //   setLanguageList((prev) => {
  //     const newState = prev?.map((prevItem) => {
  //       if (e.target.value === prevItem?.name && !prevItem?.fieldError) {
  //         return prevItem?.selected
  //           ? { ...prevItem, select: false }
  //           : { ...prevItem, select: true };
  //       } else {
  //         return { ...prevItem };
  //       }
  //     });
  //     return newState;
  //   });
  // };
  const search = (val) => {
    const nameFilter = apiList?.filter((item) => item?.file_name?.includes(val.target.value));
    setProspectsList(nameFilter);
  };
  return (
    <>
      <div className='search-memo '>{fileDownloadComponent}</div>
      <div className='search-container flex-row align-center'>
        <img
          src={ICONS?.searchLightIcon}
          alt='searchIcon'
        />
        <WhatsappSearch
          placeholder='Search Existing'
          templateSearch={search}
        />
      </div>

      {prospectsList?.map((data) => (
        <div
          className=' Existing-container flex-row space-between pointer align-center w-100'
          onClick={() => handleClick(data)}
          key={data?.id}>
          <div className='flex-row align-center w-50'>
            <img
              src={ICONS?.ExistingFile}
              alt='existingFile'
            />
            <p>{data?.file_name}</p>
          </div>
          <div className=' flex-row align-center justify-center w-40'>
            <span className=''>{data?.prospects_count} Prospects</span>
          </div>
          <div className='w-10 flex-row align-center pt-10'>
            {file === data?.file_name && <RadioButton selected={true} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default Existing;
