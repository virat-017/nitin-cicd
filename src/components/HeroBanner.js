import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner2.jpg';
const HeroBanner = () => {
  const backgroundUrl = HeroBannerImage;
  const divStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    padding: '20px',
    borderRadius: '10px',
    marginTop:"2rem"
  };
  return (
    <Typography variant="h4" component="h1">
      <Box sx={divStyle}>
      <Typography color="rgb(20, 96, 229)"  fontFamily="Poppins" fontWeight="600" fontSize="26px">MUSCLE YARD</Typography>
    <Typography color="rgb(20, 96, 229)"  fontFamily="Poppins" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Poppins" lineHeight="35px" color="white">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises"  fontFamily="Poppins" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'rgb(20, 96, 229)', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="rgb(20, 96, 229)" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
      </Box>
    </Typography>
  );
}
export default HeroBanner;