import React from 'react';
import './Card.css';

export const Card = ({
  children,
  primary,
  title,
  selected,
  backgroundColor,
  hoverCard,
  cardClick,
  border,
  borderRadius,
  margin,
  padding,
  style,
  key,
}) => {
  const mode = primary ? 'storybook-Card--primary' : 'storybook-Card--secondary';

  const clickCard = (title, selected) => {
    cardClick && cardClick(title, selected);
  };

  return (
    <div
      className={`storybook-Card-container ${mode} ${hoverCard} ${
        selected ? 'storybook-Card--primary--visible' : ''
      }`}
      style={{
        backgroundColor,
        border: border ? border : selected ? '1px solid #25c277' : '1px solid #e0e2e7',
        borderRadius: borderRadius ? borderRadius : '',
        margin: margin ? margin : '',
        padding: padding ? padding : '',
        ...style,
      }}
      onClick={() => clickCard(title, !selected)}
      key={key}>
      {children}
    </div>
  );
};
