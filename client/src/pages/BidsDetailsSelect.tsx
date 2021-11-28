/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Prop {
  text: string;
  value : string;
  handleChange:any;
  item: string[];

}

const BidsDetailsSelect: React.FC<Prop> = ({
  text, value, handleChange, item,
}) => {
  const [categories, setCategories] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 3, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={categories}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Computers">Computers</MenuItem>
          <MenuItem value="Mobile">Mobile</MenuItem>
          <MenuItem value="Gaming">Gaming</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default BidsDetailsSelect;
