import * as React from "react";
import NativePickers from "./Date";
import UnstyledSelectSimple from "../Dropdown";
import { display, padding, styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  width: 170px;
  height: 40px;
  font-family: IBM Plex Sans, sans-serif;
  color: #0c0cf4;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 1140px;
  height: 280px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  width: 1140px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: start;
  align-content: space-between;
`;

export default function Main() {
  return (
    <TabsUnstyled defaultValue={0} id="main">
      <TabsList>
<<<<<<< HEAD
        <Tab>One</Tab>
        {/* <Tab>Two</Tab>
        <Tab>Three</Tab> */}
      </TabsList>
      <TabPanel value={0}>First content</TabPanel>
      {/* <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel> */}
=======
        <Tab>FLIGHT</Tab>
        <Tab>CARS</Tab>
        <Tab>VISA</Tab>
      </TabsList>
      <TabPanel value={0}>
      <Container style={{width:"auto",height:"280px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25) ", padding:"10px"}}>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Oneway" control={<Radio />} label="Oneway" />
        <FormControlLabel value="Return" control={<Radio />} label="Return" />
        <FormControlLabel value="Multicity" control={<Radio />} label="Multicity" />
        
      </RadioGroup>
    </FormControl>
    
    
    <Box
    component="form"
    sx={{
      display:'flex',justifyContent:'space-between',
      alignItems:'center',flexWrap:'wrap'
      ,'& .MuiTextField-root': { m: 1, width: '25ch',flexDirection: 'row' },
    }}
    noValidate
    autoComplete="off"
    
    >
      
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      
      <TextField

        
          id="from-input"
          label="Type city name or airport"
          type="From"
          autoComplete="current-password"
          variant="filled"
        />
        <CompareArrowsIcon/>
        <TextField
          id="from-input"
          label="Type city name or airport"
          type="From"
          autoComplete="current-password"
          variant="filled"
        />
        </Box>

        <Box  >
        <NativePickers/>
        </Box>

        
        
    </Box>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Box sx={{display:'flex',flexWrap:'wrap'}}>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column'}} >
            <Typography component='div' variant='h5' gutterBottom> Adults </Typography>
            <Typography component='div' variant='p' gutterBottom> 12+ Years </Typography>
            <UnstyledSelectSimple/>
          </Box>
          <Box>
            <Typography component='div' variant='h5' gutterBottom> Children </Typography>
            <Typography component='div' variant='p' gutterBottom>2-12 Years</Typography>
            <UnstyledSelectSimple/>
          </Box>
          <Box>
            <Typography component='div' variant='h5' gutterBottom> Infants </Typography>
            <Typography component='div' variant='p' gutterBottom> 0-23 Months</Typography>
            <UnstyledSelectSimple/>
          </Box>
        </Box>

      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Stack  direction="row"  spacing={2}>
      
      <Button variant="contained" size="large" color="success">
        Search
      </Button>
      
    </Stack>
      </Box>


        </Box>
      </Container >
      

      </TabPanel>
      <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel>
>>>>>>> 59b2603aa0dce373d4a4fe2c6b21e3be5b446055
    </TabsUnstyled>
  );
}
