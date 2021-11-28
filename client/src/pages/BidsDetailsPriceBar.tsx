/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Slider from '@mui/material/Slider';
import './style.css';

const BidsDetailsPriceBar: React.FC = () => {
  function valuetext(value: number) {
    return `${value}°C`;
  }
  return (
    <div>
      <p className="price-range">Price Range</p>
      <Slider
        sx={{ width: 200 }}
        aria-label="Price Range"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
    </div>
  );
};

export default BidsDetailsPriceBar;
