{
  /* <table style={{ ...style }}>
        <tbody>
          <tr>
            {daysShortArr?.map((weekDays) => (
              <th key={weekDays}>{weekDays}</th>
            ))}
          </tr>
          {Object.values(calendarRows)?.map((cols) => {
            let todayDate = todayFormatted.split('-');
            let Today = new Date(todayDate[2], todayDate[1] - 1, todayDate[0]);
            return (
              <tr key={cols[0].date}>
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    <td
                      key={col.date}
                      className={`${col.classes} `}
                      // onClick={() => dateClickHandler(col.date, 'in-prev-month')}
                    >
                      <div className='flex-row justify-center align-center w-100'>
                        <div className='activeBox'>{col.value}</div>
                      </div>
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={`${col.classes} `}
                      // onClick={() => dateClickHandler(col.date, col.classes)}
                    >
                      <span className='flex-row justify-center align-center w-100'>
                        <span className='horizontalLine'>{col.value}</span>
                      </span>
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table> */
}

//  "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest",
//       "plugin:jest-dom/recommended",
//       "eslint-config-prettier",
//       "plugin:storybook/recommended"
//     ]
//   },

{
  /* {showPopup ? (
              <Popup
                selectedBrandLogo={selectedBrandLogo}
                options={options}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                setSelectedAccount={setSelectedAccount}
                activeTab={activeTab}
                selectedBrandHeader={selectedBrandHeader}
                selectedAccount={selectedAccount}
              />
            ) : ( */
}

// <ConnectionPopup
//   showPopup={showPopup}
//   setShowPopup={setShowPopup}
//   selectedBrandLogo={selectedBrandLogo}
//   selectedBrandHeader={selectedBrandHeader}
//   setConnected={setConnected}
//   options={options}
//   isDropdownOpen={isDropdownOpen}
//   setIsDropdownOpen={setIsDropdownOpen}
//   selectedAccount={selectedAccount}
//   setSelectedAccount={setSelectedAccount}
//   buttonName={buttonName}
//   activeTab={activeTab}
//   connectMeta={connectMeta}
// />

// ========watsupCampaign

{
  /* <div className='Arrow flex-column align-center justify-center'>
        <img
          src={ICONS?.WhatsappArrowIcon}
          alt='arrow icon'
        />
      </div> */
}

{
  /* <div
          className='Addicon flex-column align-center justify-center'
          onClick={() => AddClick()}>
          {templateAction === '' && (
            <img
              src={ICONS?.whatsappAddIcon}
              alt='plus icon'
            />
          )}
          {click && (
            <div className='message-menu-container flex-row space-evenly'>
              <div
                className='message flex align-center space-evenly'
                onClick={() => handleAddClick('Follow up')}>
                <>
                  <img
                    src={images?.MessageIcon}
                    alt='message icon'
                  />
                  <span>Follow up</span>
                </>
              </div>

              <div
                className='message flex align-center '
                onClick={() => handleAddClick('Reply')}>
                <img
                  src={ICONS?.TemplateReply}
                  alt='replay'
                  style={{ width: '28px', height: '28px' }}
                />
                <span>Reply</span>
              </div>
            </div>
          )}
         
        
       
      </div>
      {templateAction === 'Follow up' && 
      
     <div className='select-container align-center'>
        <div
          className='select-container-wrapper flex-row align-center'
          >
          <img
            src={images?.MessageIcon}
            alt='message icon'
          />
          <span>Select template</span>
          <img
            src={ICONS?.ToggleIcon}
            alt='dropdown'
          />
        </div>
        <SelectTemplate />
       
      </div>
     
      
    
}
        {templateAction === 'Reply' && (

          

          <div className='Reply'>
            <div className='flex align-center align-start justify-start '>
              <img
                src={ICONS?.TemplateReply}
                alt='replay'
                style={{ width: '28px', height: '28px' }}
              />
              <p>Reply Message #1</p>
              <img src={ICONS?.campaignDelete} alt='delete'/>
            </div>
            <div className='textarea-button align-center'>
              <textarea
                placeholder={initialText}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className='TextEditior-main'>
             <div className='TextEditior flex-row space-evenly'>
             <img
            src={ICONS?.BoldIcon}
            alt='bold'
          />
          <img
            src={ICONS?.ItalicIcon}
            alt='italic'
          />
           <img
            src={ICONS?.ListNumberIcon}
            alt='listnumber'
          />
          <img
            src={ICONS?.SmileIcon}
            alt='smile'
          />
          <img
            src={ICONS?.ListAngledIcon}
            alt='Angled'
          />
          <img src={ICONS?.CalibratesIcon}
          alt='Calibrates'/>
           <img
            src={ICONS?.StarIcon}
            alt='star'
          />
             </div>
             </div>
            </div>
          </div>

        )} */
}

{
  /* <div className='flex align-center'>

      ))}
       
    </div>
    <div className='statusleftside-input flex-column align-center  '> 
  
      { StatusInputList?.map((item)=>(
          <div className='input-filed  flex-row  space-between align-center'>
       <p>{item?.name}</p>
     <img src={ICONS?.dropDownIcon} alt='dropdown'  onClick={()=>handleInputClick()}/>
     </div>
      ))}
    </div>
  
<div className='flex'>
{inputaction&&(
  <div className='flex-'>
  {InputList?.map((data)=>(
    <p>{data?.name}</p>
  ))}
  </div>
)}
</div>
  {/* <div className='flex align-center'>

    <Input
                type='text'
                placeholder=''
                style={customInputStyle}
              
              />
    </div> */
}

{
  /* {!open && (
          <div className='select-button flex justify-center align-center'>
            <Button
              size={'medium'}
              label={'Select Template'}
              onClick={() => setClick()}
            />
          </div>
        )} */
}

// useEffect(() => {
//   setShowPopup(false);
//   // setConnected(false);
//   // handleChannelListApi();
//   updateBlur();
//   if (activeTab === 'facebook') {
//     setButtonName('Connect Facebook Page');
//     setChannelListPath('facebookpage/list');
//   }
//   if (activeTab === 'facebookGroup') {
//     setButtonName('Connect Facebook Group');
//     setChannelListPath('facebookgroup/list');
//   }
//   if (activeTab === 'twitter') {
//     setButtonName('Connect Twitter');
//     setChannelListPath('twitter/list');
//   }
//   if (activeTab === 'instagram') {
//     setButtonName('Connect Instagram Business');
//     setChannelListPath('instagram/list');
//   }
//   if (activeTab === 'whatsapp') {
//     setButtonName('Connect Whatsapp');
//     setChannelListPath('whatsapp/list');
//   }
//   if (activeTab === 'pinterest') {
//     setButtonName('Connect Pinterest');
//     setChannelListPath('pinterest/list');
//   }
//   if (activeTab === 'linkedin') {
//     setButtonName('Connect LInkedIn Page');
//     setChannelListPath('linkedinpage/list');
//   }
//   if (activeTab === 'linkedinProfile') {
//     setButtonName('Connect LinkedIn Profile');
//     setChannelListPath('linkedinprofile/list');
//   }
// }, [activeTab]);

<div className='popup-body'>
  <div className='scrollableContainer'>
    {/* {responseData?.map((each) => ( */}
    <div className='popupListContainer'>
      {/* {each?.header && (
                <div
                  className='popupListHeader'
                  onClick={() => {
                    // if (isDropdownOpen === each?.id) {
                    //   setIsDropdownOpen('');
                    // } else {
                    //   setIsDropdownOpen(each?.id);
                    // }
                  }}>
                  <TitleAndDescription
                    gap='4px'
                    size='medium'
                    title={each?.header}
                  />
                  <img
                    src={ICONS.dropDownIcon}
                    alt='dropdown'
                  />
                </div>
              )} */}
      {/* {responseData?.pages?.length === 1 && ( */}
      {responseData?.list?.length > 0 ? (
        <div className='popupList'>
          {responseData?.list?.map((listItem) => {
            let itemName =
              typeof listItem?.name === 'string' ? listItem?.name : listItem?.localizedName;
            return (
              <div
                className='popupItem'
                onClick={() => handleSelected(listItem)}>
                <TitleAndDescription
                  gap='4px'
                  size='small'
                  title={itemName}
                  descClass='text-xs'
                  description={selectedChannelsDetails?.pageName}
                />
                {(itemName === selectedAccount?.name ||
                  itemName === selectedAccount?.localizedName) && <RadioButton selected={true} />}
              </div>
            );
          })}
        </div>
      ) : (
        <div className='noListWrapper flex-column align-center justify-center'>
          <img
            src={images?.noList}
            alt='noList'
            className='noListImg'
          />
          <div className='title mt-5'>No List </div>
          <div className='para mt-5'>
            No List have been found. Click the button below to create one.
          </div>
        </div>
      )}
      {/* )} */}
    </div>
    {/* ))} */}
  </div>
  <div className='confirmationModalBottom'>
    {responseData?.list?.length > 0 && (
      <Button
        className='btn cancelBtn'
        size={'medium'}
        label='Cancel'
        onClick={() => handleCancel()}
      />
    )}
    {responseData?.list?.length > 0 && (
      <>
        {selectedAccount?.hasOwnProperty('id') ? (
          <Button
            className={`btn continueBtn enableBtn`}
            size={'medium'}
            label='Done'
            onClick={() => selectPageOrGrp()}
          />
        ) : (
          <Tooltip title={'Kindly Select'}>
            <Button
              className={`btn continueBtn enableBtn`}
              size={'medium'}
              label='Done'
            />
          </Tooltip>
        )}
      </>
    )}

    {/* //  */}
  </div>
</div>;

// eslint-disable-next-line react-hooks/exhaustive-deps
