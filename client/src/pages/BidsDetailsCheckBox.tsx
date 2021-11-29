/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const BidsDetailsCheckBox: React.FC = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <FormControl component="fieldset" sx={{ width: '100px', height: '100px' }}>
        <FormLabel component="legend">Auction Status</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="All " control={<Radio />} label="All " />
          <FormControlLabel value="Ended" control={<Radio />} label="Ended" />
          <FormControlLabel value="Open" control={<Radio />} label="Open" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default BidsDetailsCheckBox;
