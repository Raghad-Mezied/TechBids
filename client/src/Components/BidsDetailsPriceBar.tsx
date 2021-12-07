import React from 'react';
import {
  FormControl,
  FormLabel,
  Slider,
} from '@mui/material';

interface Prop {
  setPrice : React.Dispatch<React.SetStateAction<number[]>>;
  price: number[];
}

const BidsDetailsPriceBar: React.FC<Prop> = ({ price, setPrice }) => {
  const handleChange = (event: Event, newValue: number | number[]): void => {
    setPrice(newValue as number[]);
  };

  return (
    <FormControl component="fieldset" className="filter-container">
      <FormLabel className="filter-title">Price Range ($)</FormLabel>
      <Slider
        getAriaLabel={() => 'Price Range'}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        step={1}
        size="small"
      />
    </FormControl>
  );
};

export default BidsDetailsPriceBar;
