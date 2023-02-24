import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo3.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#191f2a" height="70px" 
        sx={{borderTopLeftRadius: "100px",
            borderTopRightRadius:"100px"
            }}>
    <Stack direction="row" gap="20px" sx={{ alignItems: 'center',marginLeft:{lg:"280px",sm:"150px"} }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '41px' }} />
    <Typography variant="h3" sx={{ fontSize: { lg: '28px', xs: '20px' },color:"white",fontFamily:"Poppins" }} mt="10px" textAlign="center" >Copyright @Nitin Saini</Typography>

    </Stack>
  </Box>
);

export default Footer;