import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import BroadCaseCard from '../broadCastCard/BroadCaseCard';
import TitleAndDescription from '../Title/TitleAndDescription';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ICONS } from '../../../assets/icons';

const CardSlider = ({ data, header }) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}>
        <div className='custom-arrow next-arrow'>
          <img
            src={ICONS?.RightArrow}
            alt='Rightarrow'
          />
        </div>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}>
        <div className='custom-arrow prev-arrow'>
          <img
            src={ICONS?.LeftArrow}
            alt='Leftarrow'
          />
        </div>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='w-100 flex-column gap-2 p-1 card-container'>
      <TitleAndDescription
        gap='2px'
        size={'medium'}
        title={header}
      />
      <div className='w-90 mx-auto cards'>
        <Slider {...settings}>
          {data?.map((e, i) => (
            <div className='w-90 mr-2 card'>
              <BroadCaseCard
                content={e}
                key={i}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
