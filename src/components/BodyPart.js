import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym1.png';


const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{ borderTop:bodyPart === item ? '4px solid rgb(20, 96, 229)':'',
          background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '270px', cursor: 'pointer', gap: '47px',
          marginTop:"15px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          "&:hover": {
            boxShadow: "rgb(38, 57, 77) 0px 10px 20px -10px"
          }
         }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;