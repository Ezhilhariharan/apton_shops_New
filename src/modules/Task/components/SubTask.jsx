import React, { useState } from 'react';
import '../styles/Task.css';

// import '../../../modules/campaign/styles/campaignModal.css';
import { Button } from '../../../components/form/Button/Button';
import { ICONS } from '../../../assets/icons/index';

import Index from '../../../components/commonComponents/assignee/Index';
import Avatar from '../../../components/commonComponents/avatar/Avatar';
import RadioButton from '../../../components/form/radio/RadioButton';
import Right from './SubTaskRight';

export const saveTask = [
  {
    id: 1,
    value: '',
    saved: false,
  },
];

export const Icon = [
  {
    id: 1,
    name: 'R',
    color: '#38B4C1',
  },
];

const SubTask = ({ onClick }) => {
  const [toggle, setToggle] = useState(false);
  const [Task, SetlistTask] = useState([
    {
      id: 1,
      inputvalue: '',
      saved: false,
      // count: 0,
    },
  ]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState(false);

  // const handleClick = () => {
  //   setSelected(true);
  // };

  // const handleAddClick = () => {
  //   if (Task?.length === 0 || Task[Task?.length - 1].saved) {
  //     const AddTask = {
  //       id: 1 + Task.length,
  //       inputvalue: '',
  //       saved: false,
  //     };
  //     const updatetask = [...Task];
  //     updatetask.push(AddTask);
  //     SetlistTask(updatetask);
  //     setCount(count + 1);
  //   }
  // };

  const handleDelete = (id) => {
    const reducedTasks = Task?.filter((Task, item) => item !== id);
    SetlistTask(reducedTasks);
    setCount(count - 1);
  };

  const handleChanger = (value, item) => {
    SetlistTask((prev) => {
      const newState = prev?.map((data) => {
        if (data?.id === item?.id) {
          return { ...data, inputvalue: value };
        } else {
          return { ...data };
        }
      });
      return newState;
    });
  };

  const handleSaveClick = (item) => {
    SetlistTask((prev) => {
      const updateState = prev?.map((data) => {
        if (data?.id === item?.id) {
          return { ...data, saved: true };
        } else {
          return { ...data };
        }
      });
      return updateState;
    });
    //  setCount(count + 1);
  };
  //   const handleclickChanger = () => {
  //    setCount((prevCount) => {
  //      const newCount = prevCount + 1;
  //      console.log(newCount);
  //      return newCount;
  //    });

  //  };
  return (
    <>
      <div className='sub-Task-container flex-row align-center '>
        <img
          src={ICONS?.SubTaskMainIcon}
          alt='subtask'
        />

        <span className='subtask-name'>Subtask</span>
        {toggle && (
          // <span>{count}</span>
          <span className='count'>0/1</span>
        )}
        {!toggle && (
          <div className='subtask-Addbutton '>
            <Button
              onClick={() => setToggle(!toggle)}
              label={'Add'}
              size={'xm'}
              iconPrefix={ICONS.addSquareIcon}
            />
          </div>
        )}
      </div>

      {toggle && (
        <div className='task1'>
          {Task?.map((item, id) => (
            <div
              key={item?.id}
              className='task2 '>
              <div className='radio'>
                <RadioButton />
                {/* onChange={(e) => handleclickChanger(e.target.value, count)} value="" /> */}
              </div>
              <div className='task-left'>
                <input
                  type='text'
                  value={item?.inputvalue}
                  maxLength={100}
                  onChange={(e) => handleChanger(e.target.value, item)}
                  placeholder='create Subtask'
                />

                <img
                  src={ICONS?.campaignCopy}
                  alt='copy'
                />
                <img
                  src={ICONS?.campaignDelete}
                  alt='delete'
                  onClick={() => handleDelete(id)}
                />
              </div>

              <div className='task-right '>
                {item?.saved ? (
                  <div className='Add-task flex-row justify-end '>
                    <div
                      key={item?.id}
                      className='Addtask-img flex-row'>
                      <div className='Addtask-calendar flex-row  space-evently  '>
                        <img
                          src={ICONS?.TaskCalendaticon}
                          alt='calendar'
                        />
                        <span>Aug 28</span>
                      </div>
                      <img
                        src={ICONS?.SubPriority}
                        alt='priority'
                        style={{
                          width: '30px',
                          height: '30px',
                        }}
                      />

                      <div>
                        {Icon?.map((avatar) => (
                          <Avatar
                            key={avatar?.id}
                            name={avatar?.name}
                            style={{
                              backgroundColor: avatar?.color,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='task3'>
                    <Right
                      handleDelete={handleDelete}
                      handleSaveClick={handleSaveClick}
                      item={item}
                      id={id}
                      assigneeWidth='28px'
                      assigneeHeight='28px'
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {toggle && (
        <span className='add-subtask flex-row'>
          {/* onClick={handleAddClick}> */}
          <img
            src={ICONS?.addPlusIcon}
            alt='addPlusIcon'
          />
          Add SubTask
        </span>
      )}
    </>
  );
};

export default SubTask;
