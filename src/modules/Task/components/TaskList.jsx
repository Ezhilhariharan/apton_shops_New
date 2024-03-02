import React, { useState } from 'react';
import '../styles/Task.css';

import { taskList } from '../../../constant/app/campaign/campaignExtended';
import { ICONS } from '../../../assets/icons';

import ChannelList from '../../../components/commonComponents/channels/ChannelList';
import Tags from '../../../components/commonComponents/tags/Index';
import DueDate from './DueDate';
import { Input } from '../../../components/form/Input/Input';
import PromotionType from './PromotionType';

const popoverProp = {
  width: '120px',
  height: '10px',
};

const TaskList = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className='taskList-main-container'>
      {taskList?.map((item) => (
        <div
          key={item?.id}
          className='taskList-container'>
          <span>{item?.title}</span>
          <div className='taskList-wrapper pointer flex-row align-center'>
            {item?.id === 4 && item?.icon && (
              <div
                className='taskList-item4 flex-row'
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
                {isHovering ? (
                  <div className='budget-rightDropDown'>
                    <Input
                      iconPrefix={ICONS.Budget}
                      rightDropDown
                      style={popoverProp}
                    />
                  </div>
                ) : (
                  <div className='taskList-item4-right flex-row align-center'>
                    <img
                      src={item.icon}
                      alt='task'
                    />
                    <span className='taskList-task'> {item?.task1}</span>
                  </div>
                )}
              </div>
            )}
            {item?.id === 5 && (
              <ChannelList
                width={30}
                height={30}
              />
            )}
            {item?.id === 1 && <Tags selectedTags={setSelectedTags} />}
            {item?.id === 2 && <DueDate />}
            {item?.id === 6 && <DueDate />}
            {item?.id === 3 && <PromotionType />}
            {item?.id === 1 ? (
              selectedTags?.length === 0 ? (
                <span className='taskList-task'>{item?.task}</span>
              ) : (
                ''
              )
            ) : (
              <span className='taskList-task'>{item?.task}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
