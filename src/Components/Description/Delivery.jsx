import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './Delivery.css';
//import LocalShippingIcon from '@mui/icons-material/LocalShipping';
//import LoopIcon from '@mui/icons-material/Loop';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));



export default function ZeroWidthStack() {
  return (
    <Box className="deli-vry" sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack className="delii-vry" spacing={2} direction="row" alignItems="center">
          <Avatar> <i class="fa-solid fa-truck"></i></Avatar>
          <Typography noWrap><div className='free'>Free Delivery </div>
          <div className='enter'>Enter Yout postal code for Delivery Availability.</div></Typography>
        </Stack>
      </Item>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack className="delii-vry" spacing={2} direction="row" alignItems="center">
          <Stack>
            <Avatar><i class="fa-solid fa-arrows-rotate"></i></Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
          <Typography noWrap><div className='free'>Return Delivery </div>
          <div className='enter'>Free 30 Days Delivery returns.</div></Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}
