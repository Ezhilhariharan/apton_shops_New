import React, { useState, useEffect } from 'react';
import '../styles/board.css';

import { statusList } from '../../../constant/app/appLayout';
import { ICONS } from '../../../assets/icons/index';

import BoardCard from './BoardCard';
import AddTask from './AddTask';

function Board() {
  const [taskCreation, setTaskCreation] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(statusList);

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    setSelectedStatus((prev) => {
      const newState = prev?.map((data) => {
        if (data?.status == event.target.id) {
          return { ...data, showCard: true };
        } else {
          return { ...data, showCard: false };
        }
      });
      return newState;
    });
  };

  const createTask = (item) => {
    let addTask = [item, ...selectedStatus];
    setSelectedStatus(addTask);
  };

  return (
    <div className='boardWrapper flex-row'>
      {selectedStatus?.map((item) => (
        <div
          className='taskWrapper h-100'
          key={item?.id}>
          <div className='statusHeader flex-row align-center space-between'>
            <div className='flex-row align-center h-100'>
              <div
                className='statusColor'
                style={{ background: item?.color }}
              />
              <div className='statusName'> {item?.status}</div>
            </div>
            <div className='flex-row align-center h-100'>
              <span className='listCount flex-column align-center justify-center'>02</span>
              <img
                src={ICONS?.addPlusIcon}
                alt={item?.status}
                className='plusIcons'
              />
            </div>
          </div>
          <div
            className='taskList'
            id={item?.status}
            onDrop={drop}
            onDragOver={allowDrop}>
            {item?.showCard && <BoardCard id={item?.status} />}
            <div
              className='addTask pointer mt-10 mb-10'
              onClick={() => setTaskCreation(item?.status)}>
              <div className='flex-row justify-center  align-center innerDiv'>
                <img
                  src={ICONS?.addPlusIcon}
                  alt={item?.status}
                  className='plusIcons'
                />
                Add Task
              </div>
            </div>
            {taskCreation === item?.status && <AddTask createTask={createTask} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Board;
