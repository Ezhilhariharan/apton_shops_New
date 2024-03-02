import React, { useState } from 'react';
import './Activity.css';

import { Button } from '../../form/Button/Button';
import { ICONS } from '../../../assets/icons';
import TextEditior from '../text_editior/TextEditior';

function Activity({ handleDetailsClick }) {
  const [value, setValue] = useState('');

  const initialText = `Write comment`;

  return (
    <div className='activityWrapper w-100 h-100'>
      <div className='activityWrapper-header flex-row space-between align-center'>
        <div className='heading'>Activity</div>
        <img
          src={ICONS?.Share}
          alt='share'
          className='shareIcons'
        />
      </div>
      <div className='activityBody flex-column flex-end '>
        <div className='activitycard flex-column align-center justify-center  '>
          <div className='Activity-wrapper flex-row align-center  space-between'>
            <div className='Assignee flex-row align-center justify-center '>
              <span>R</span>
            </div>
            <div className='activity-name'>
              <span>Ruba Dewan</span> Changed status
            </div>
            <div className='status-inprogress flex justify-center align-center '>
              <div
                className='status-color '
                style={{
                  background: 'var(--darkgrey) ',
                }}></div>
              <span>Todo</span>
            </div>
            <div className='Icon'>
              <img
                src={ICONS?.ActivityIcon}
                alt='ActivityIcon'
              />
            </div>
            <div className='status-inprogress flex-row justify-center align-center'>
              <div
                className='status-color'
                style={{
                  background: 'var( --secondary) ',
                }}></div>
              <span>In-progress</span>
            </div>
            <div className='Activity-calendar'>30 sep,4:58PM</div>
          </div>
          <div className='Activity-comments flex-row align-center'>
            <img
              src={ICONS?.RightArrowIcon}
              alt='RightArrowIcon'
            />
            <span>Hide</span>
          </div>
          <div className='Comments flex-row'>
            <div className='flex-row'>
              <img
                src={ICONS?.CommentsIcon}
                alt='commenticon'
              />
              <span className='comments-name space-between '>
                <span className='pr-10'>Ruba Dewan</span>
                Added a subtask
                <span className='pl-5'>"Create Social media creative for facebook"</span>
              </span>
            </div>
            <div className='comments-calendar flex-row flex-end'>1 Oct,4:58PM</div>
          </div>

          <div className='Comments flex-row space-between '>
            <div className='flex-row '>
              <img
                src={ICONS?.CommentsIcon}
                alt='commenticon'
              />
              <span className='comments-name1 space-between align-center'>
                <span className='pr-10'>Ruba Dewan</span>
                Added a Assignee
                <span
                  className=' pl-5'
                  style={{ color: 'var(--primary)' }}>
                  Ruba Dewan
                </span>
              </span>
            </div>
            <div className='comments-calendar flex-row  flex-end'>Today,4:58PM</div>
          </div>

          <div className='Comments flex-row space-between '>
            <div className='flex-row '>
              <img
                src={ICONS?.CommentImage}
                alt='commentIcon'
              />
              <span className='comments-name space-between align-center'>
                <span>Ruba Dewan</span> Added a comment
              </span>
            </div>
            <div className='Activity-calendar '>Today,4:58PM</div>
          </div>

          <div className='comment-content  pb-5'>
            Lorem ipsum dolor sit amet consectetur. Eu venenatis purus dui mattis placerat odio
            morbi fermentum nulla.
          </div>

          <div className='textarea-button align-center'>
            <textarea
              placeholder={initialText}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className=' Textwrapper  justify-start  flex-row space-between'>
              <TextEditior />
              <Button
                size={'xs'}
                iconSuffix={ICONS.sendIcon}
                onClick={handleDetailsClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
