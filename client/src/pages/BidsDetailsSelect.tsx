/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Prop {
  text?: string ;
  value? : string ;
  // handleChange:any;
  item: string[] ;

}

const x: Prop = {
  text: 'hello',
  value: 'Computers',
  // handleChange:any;
  item: ['Mobile', 'Computers', ' Gaming'],

};

const BidsDetailsSelect: React.FC<Prop> = ({
  text, value, item,
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
          <MenuItem value={value}>
            <em>None</em>
          </MenuItem>
          {item.map((itemMenu) => <MenuItem value={itemMenu}>{itemMenu}</MenuItem>)}
          {/* {item.map((itemMenu) => <MenuItem value={itemMenu.id}>{itemMenu.name}</MenuItem>)} */}
        </Select>

      </FormControl>
    </div>
  );
};

export default BidsDetailsSelect;
