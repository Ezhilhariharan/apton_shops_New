import React from 'react';
import './Index.css';

import { ICONS } from '../../../assets/icons/index';
import useAssignee from '../../../hooks/useAssignee';

import { Popover } from 'antd';

import Avatar from '../avatar/Avatar';
import AssigneePopover from './AssigneePopover';

const rowIcon = {
  // width: '35px',
  // height: '35px',
  color: 'var(--textWhite)',
  fontSize: '0.7vw ',
  fontWeight: '400',
  borderRadius: '50%',
};

function Index({ width, height }) {
  const [assigneeList, SelectList] = useAssignee();

  return (
    <div className='flex-row align-center'>
      {assigneeList
        ?.filter((item) => item?.selected)
        ?.slice(0, 3)
        ?.map((item) => (
          <span
            className='multipleIcons'
            key={item?.id}>
            <Avatar
              name={item?.name}
              style={{
                backgroundColor: item?.bg,
                width: width ? width : '35px',
                height: height ? height : '35px',

                ...rowIcon,
              }}
            />
          </span>
        ))}
      <Popover
        content={<AssigneePopover selectingFromParent={SelectList} />}
        trigger='click'>
        <span className='multipleIcons'>
          <img
            src={ICONS?.addMembers}
            alt={'assignee'}
            className='footerImgBig '
            style={{ width: width ? width : '35px', height: height ? height : '35px' }}
          />
        </span>
      </Popover>
    </div>
  );
}

export default Index;
