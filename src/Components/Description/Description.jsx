import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Description.css';
import {  Radio, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Divider } from 'antd';
import { CheckBox } from '@mui/icons-material';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  }
  return (
    <div className='item-description'> Havic HV G-92 Gamepad
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        className="rating"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /><div className='rating-text'>(150 Reviews)</div><div className='in-stock'><a>|</a> In Stock</div>
      <div className='dollar'> $ 192.00</div>
      <div className='first-line'>PlayStation 5 Controller Skin High quality vinyl with air</div>
      <div className='second-line'>channel adhesive for easy bubble free install & mess</div>
      <div className='third-line'>free removal pressure sessitive.</div>
      <Divider className='divider'></Divider>
      <div className='colours'>Colours:</div>
      <div><Radio className='radio-colour'
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio className='radio-colours'
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      /></div>
      <div className='size-div'>Size:</div>
      <div className='size-btn'>
      <ToggleButtonGroup className='size-btn'
      color="primary"
      value={alignment}
      exclusive
      onChange={handleInputChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">XS</ToggleButton>
      <ToggleButton value="android">S</ToggleButton>
      <ToggleButton value="ios">M</ToggleButton>
      <ToggleButton value="ios">L</ToggleButton>
      <ToggleButton value="ios">XL</ToggleButton>
    </ToggleButtonGroup>
    </div>
    
    </Box>
    </div>
  );
}
