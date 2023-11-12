import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Buynow.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Buynow() {
  return (
   
    
    <Stack direction="row" spacing={2}>
      
      <Button className='buy-now' variant='contained'>
        Buy Now
      </Button>
      
      
    </Stack>
  );
}
