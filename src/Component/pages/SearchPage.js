import * as React from 'react';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { Container } from '@mui/material';

import Box1 from '../SearchPageComponent/1st box/Box1';
import Box2 from '../SearchPageComponent/2nd box/Box2';
import Box3 from '../SearchPageComponent/3rd box/Box3';
import Box4 from '../SearchPageComponent/4th box/Box4';
import Box5 from '../SearchPageComponent/5th box/Box5';
const Searchpage = () => {
  return (
    <Container sx={{
      display:'flex',
      width:'auto',
      height:'1000px',
      bgcolor:'white',
      flexDirection:'column'
      }}>
      {/* 1st box start */}
      <Box1/>
      {/* 1st box end */}

      {/* 2nd box start */}
      <Box2/>
      {/* 2nd box end */}

      {/* 3rd box start */}

      <Box3/>
      {/* 3rd box end */}

      {/* 4th box start */}
      <Box4/>
      {/* 4th box end */}

      {/* 5th box start */}
      <Box5/>
    </Container>
  );
}

export default Searchpage;
