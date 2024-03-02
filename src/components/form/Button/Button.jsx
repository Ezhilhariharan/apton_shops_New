import React from 'react';
import './Button.css';

import Loader from '../../commonComponents/Loader/Index';

export const Button = ({
  primary,
  backgroundColor,
  size,
  dataTestId,
  disabled,
  onClick,
  label,
  icon,
  type,
  iconPrefix,
  iconSuffix,
  width,
  bgclr,
  btnStyle,
  useRightImage1Class,
  loading,
  ...props
}) => {
  const mode = primary ? 'storybook-button--secondary' : 'storybook-button--primary';

  return (
    <>
      <button
        type={type}
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        data-testid={dataTestId}
        disabled={disabled}
        onClick={onClick}
        {...btnStyle}
        {...props}>
        {loading ? (
          <div
            className='flex-row align-center justify-center'
            style={{ width: '100px', height: '20px' }}>
            <Loader
              Width='20px'
              Height='20px'
              loaderBg='4px solid white'
              loaderColor='4px solid var(--primary)'
            />
          </div>
        ) : (
          <>
            {iconPrefix && (
              <img
                alt='leftImage'
                className='leftImage'
                src={iconPrefix}
              />
            )}
            {label}
            {iconSuffix && (
              <img
                alt='rightImage'
                className={`rightImage ${useRightImage1Class ? 'rightImage1' : ''}`}
                src={iconSuffix}
              />
            )}
          </>
        )}
      </button>
    </>
  );
};
