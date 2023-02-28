import React from 'react';
import { fontFamily, fontLarge } from '../../styles/font';
import { Typography } from '@mui/material';



const Logo = (props:any) => {
  return (
    <Typography
      sx={{
        ...fontLarge,
        fontFamily: fontFamily.pattaya,
      }}
    >
      Image gallery
    </Typography>
  );
}

export default Logo
