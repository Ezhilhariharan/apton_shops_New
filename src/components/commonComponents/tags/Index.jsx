import React, { useState } from 'react';
import './Index.css';
import '../channels/channels.css';

import { ICONS } from '../../../assets/icons/index';
import { Popover } from 'antd';
import Tag from './tag';

const sampleCode = [
  {
    id: 1,
    tags: 'foodie',
    color: 'rgba(245, 154, 46, 1)',
    bg: ' rgba(245, 154, 46, 0.1)',
  },
  { id: 2, tags: 'living', color: 'rgba(121, 65, 211, 1)', bg: 'rgba(121, 65, 211, 0.1)' },
  { id: 3, tags: 'Travel', color: 'rgba(56, 180, 193, 1)', bg: 'rgba(56, 180, 193, 0.1)' },
  { id: 4, tags: 'blog', color: 'rgba(245, 46, 114, 1)', bg: 'rgba(245, 46, 114, 0.1)' },
  { id: 5, tags: 'climate', color: 'rgba(56, 111, 193, 1)', bg: 'rgba(56, 111, 193, 0.1)' },
  { id: 6, tags: 'foaadie', color: 'rgba(193, 56, 56, 1)', bg: 'rgba(193, 56, 56, 0.1)' },
  { id: 7, tags: 'loving', color: 'rgba(56, 180, 193, 1)', bg: 'rgba(56, 180, 193, 0.1)' },
];

function Index({ addTags, selectedTags, width, height }) {
  const [inputValue, setInputValue] = useState('');
  const [hover, setHover] = useState('');
  const [listTags, setListTags] = useState(sampleCode);
  const [newTags, setNewTags] = useState([]);
  const [tagsList, setTagsList] = useState(sampleCode);

  const selectingChannel = (item) => {
    setTagsList((prev) => {
      const updatedList = prev?.map((prevItem) => ({
        ...prevItem,
        selected: prevItem.id === item?.id ? !prevItem?.selected : prevItem?.selected,
      }));

      const isNewTag = newTags?.find((newTag) => newTag?.id === item?.id);

      if (isNewTag) {
        return [...updatedList, isNewTag];
      }

      return updatedList;
    });

    selectedTags(tagsList);
  };

  const handleInputChange = (e) => {
    setInputValue(e?.target?.value);

    const filteredTags = sampleCode?.filter((tag) =>
      tag?.tags?.toLowerCase()?.includes(e?.target?.value?.toLowerCase()),
    );
    setListTags(filteredTags);
  };

  const afterEnter = (event) => {
    if (event.key === 'Enter' && inputValue) {
      var num = Math.round(0xffffff * Math.random());
      var r = num >> 16;
      var g = (num >> 8) & 255;
      var b = num & 255;

      let addTag = {
        id: Math.random(),
        tags: inputValue,
        color: 'rgb(' + r + ', ' + g + ', ' + b + ')',
        bg: 'rgba(' + r + ', ' + g + ', ' + b + ', 0.1)',
      };

      setNewTags((prevTags) => [addTag, ...prevTags]);
      setListTags([...sampleCode]);
      setTagsList((prevList) => [
        ...prevList,
        {
          tags: inputValue,
          selected: false,
          id: Math.random(),
          color: 'rgb(' + r + ', ' + g + ', ' + b + ')',
          bg: 'rgba(' + r + ', ' + g + ', ' + b + ', 0.1)',
        },
      ]);
      setInputValue('');
    }
  };

  const exitTags = (item) => {
    setListTags((prev) => {
      const newState = prev?.filter((data) => data?.id !== item?.id);
      return newState;
    });
  };

  const PopupContent = () => {
    return (
      <div className='tagWrapper '>
        <input
          className='newTags'
          value={inputValue}
          type='text'
          placeholder='Search or create new'
          onKeyDown={afterEnter}
          onChange={handleInputChange}
        />
        <div className='tagWrappers mt-10 '>
          <div className='flex-row'>
            {newTags?.map((item) => (
              <Tag
                key={item.id}
                item={item}
                setHover={setHover}
                hover={hover}
                addTags={addTags}
                exitTags={exitTags}
                tags={inputValue}
                onClick={() => selectingChannel(item)}
              />
            ))}
          </div>

          <div className='tag-line mt-10'></div>

          <div className='tagsWrapper mt-10 '>
            {listTags?.map((item) => (
              <Tag
                key={item?.id}
                item={item}
                setHover={setHover}
                hover={hover}
                addTags={addTags}
                exitTags={exitTags}
                tags={inputValue}
                onClick={() => selectingChannel(item)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Popover
        content={<PopupContent />}
        trigger='click'>
        <img
          src={ICONS?.addBGtransparent}
          alt={'assignee'}
          className='footerImgBig'
          style={{ width: width ? width : '35px', height: height ? height : '35px' }}
        />
      </Popover>
      <div className='flex-row align-center'>
        {tagsList
          .filter((item) => item?.selected)
          .slice(0, 2)
          .map((item) => (
            <div
              className={`newTags1 ${item?.selected ? 'selected' : ''}`}
              key={item.id}
              style={{
                backgroundColor: item?.selected ? item?.bg : '',
                color: item?.selected ? item?.color : '',
              }}>
              {item?.tags}
            </div>
          ))}
        {tagsList?.filter((item) => item?.selected)?.length > 2 && (
          <div className='newTags-numbers ml-5'>
            +{tagsList?.filter((item) => item?.selected)?.length - 2}
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
