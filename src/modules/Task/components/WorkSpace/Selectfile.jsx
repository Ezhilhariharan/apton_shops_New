import React, { useMemo, useState, useRef } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { Button } from '../../../../components/form/Button/Button';

import { uploadFile } from '../../../../helper/uploadFile';

import useToggle from '../../../../hooks/useToggle';

import FileDownload from './FileDownload';
import Loader from '../../../../components/commonComponents/Loader/Index';

import * as XLSX from 'xlsx';

const Selectfile = ({ setResponse, response }) => {
  const [fileLoader, setFileLoader] = useState(false);
  const [value, toggleValue] = useToggle(false);
  const [fileName, setFileName] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [prospectsCount, setProspectsCount] = useState(0);

  const fileInputRef = useRef(null);

  const handleFileChange = (selectedFile) => {
    setFile(true);

    setTimeout(() => {
      setUploadSuccess(true);
    }, 1000);
  };

  // const handleClick = () => {
  //   toggleValue(true);
  //   setTimeout(() => {
  //     setFile(!file);
  //     if (!file) {
  //       toggleValue(false);
  //     }
  //   }, 500);

  //   fileInputRef.current.click();
  // };

  // const resetUpload = () => {
  //   setFile(false);
  //   setUploadSuccess(false);
  // };

  // const fileDownloadComponent = useMemo(() => {
  //   if (uploadSuccess) {
  //     return (
  //       <div>
  //         <Button
  //           label='Upload Another File'
  //           onClick={resetUpload}
  //         />
  //       </div>
  //     );
  //   }

  //   return file && <FileDownload />;
  // }, [file, uploadSuccess]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
    e.target.value = '';
  };

  const handleFile = async (file) => {
    const filesName = file?.name?.split('.')[0];
    setFileName(filesName);
    setFileLoader(true);
    const convertFile = await getBase64(file);
    const responseFile = await uploadFile(file);
    responseFile &&
      setResponse({
        ...response,
        file_path: responseFile,
        fileName: filesName,
        prospectsCount: prospectsCount,
      });

    responseFile && setFileLoader(false);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      // reader.readAsDataURL(file);
      reader.onload = (event) => {
        const bstr = event.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        const wsName = wb.SheetNames[0];
        const ws = wb.Sheets[wsName];

        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        let excelData = convertToJson(data);
        let mobNumber = [];
        excelData?.map((item) => {
          item?.mobile_number !== '' && mobNumber.push(item?.mobile_number);
        });

        let avoidDuplicate = mobNumber?.filter((item, index) => mobNumber?.indexOf(item) === index);
        avoidDuplicate?.length > 0 && avoidDuplicate[0] !== ''
          ? setProspectsCount(avoidDuplicate?.length)
          : setProspectsCount(0);

        avoidDuplicate?.length > 0 &&
          avoidDuplicate[0] !== '' &&
          setResponse({
            ...response,
            prospectsCount: avoidDuplicate?.length,
          });
        resolve(reader.result);
      };
      reader.readAsBinaryString(file);

      reader.onerror = (error) => reject(error);
      // sendFile(file);
    });

  const convertToJson = (csv) => {
    var lines = csv.split('\n');

    var result = [];

    var headers = lines[0].split(',');

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentLine = lines[i].split(',');

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }

      result.push(obj);
    }
    return result;
  };

  return (
    <div>
      <div
        className='upload-container '
        onDragOver={handleDrag}
        onDrop={handleDrop}>
        <label className='uploadLabel flex-column justify-center align-center'>
          <input
            className='input'
            type='file'
            onChange={handleChange}
            //   ref={fileInputRef}
            accept='.xlsx'
          />
          <div className='duplicateButton flex-row align-center justify-center'>
            {fileLoader ? (
              <div className='loaderWrapper flex-row align-center justify-center '>
                <Loader
                  Width='20px'
                  Height='20px'
                  loaderBg='3px solid white'
                  loaderColor='3px solid var(--primary)'
                />
              </div>
            ) : (
              'Choose file'
            )}
          </div>
          <p>( Drag & Drop the file to upload )</p>
        </label>
      </div>
      <input
        type='file'
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e.target.files[0])}
      />
      {/* {fileDownloadComponent} */}
      {response?.file_path && (
        <FileDownload
          fileName={fileName ? fileName : response?.fileName}
          prospects={prospectsCount ? prospectsCount : response?.prospectsCount}
        />
      )}
    </div>
  );
};

export default Selectfile;
