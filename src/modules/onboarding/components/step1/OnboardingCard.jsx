import React from 'react';
import '../../style/DashboardCard.css';

import { Button } from '../../../../components/form/Button/Button';

export const DashboardCard = ({
  primary,
  title,
  content,
  siteIcon,
  siteLink,
  channelIcon,
  channelName,
  hoverCard,
  backgroundColor,
  selected,
  handleButtonClick,
}) => {
  const handleClick = () => {
    handleButtonClick();
  };
  const mode = primary ? 'storybook-Card--primary' : 'storybook-Card--secondary';

  return (
    <div
      className={`storybook-dashboardCard-container flex-row align-center space-between pointer ${mode} ${hoverCard}`}
      style={{
        backgroundColor,
        border: selected ? '1px solid #25c277' : '1px solid #e0e2e7',
      }}>
      <div className='storybook-dashboardCard flex-row align-center'>
        <div className='dashboardCard-flex flex-row align-center'>
          {title && <h2>{title}</h2>}
          {content && <p>{content}</p>}
        </div>

        <div className='dashboardCard-flex1 flex-row align-center'>
          {siteIcon && (
            <img
              src={siteIcon}
              alt={siteLink}
            />
          )}
          {siteLink && <h3>{siteLink}</h3>}

          <span className='first-span'> | </span>
          {channelIcon && (
            <img
              src={channelIcon}
              alt={channelName}
            />
          )}
          <span className='second-span'> | </span>
          {channelName && <h4>{channelName}</h4>}
          {content && <p>{content}</p>}
        </div>
      </div>
      <span>
        <div className='step1-channel-btn'>
          <Button
            type='submit'
            label={`Use`}
            size='small'
            // style={button}
            onClick={handleClick}
          />
        </div>
      </span>
    </div>
  );
};
