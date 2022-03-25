import * as React from "react";
import NativePickers from "./Date";
import { padding, styled } from "@mui/system";
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
import { Container } from "@mui/material";


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
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

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
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  width: 1140px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function Main() {
  return (
    <TabsUnstyled defaultValue={0} id="main">
      <TabsList>
        <Tab>FLIGHT</Tab>
        <Tab>CARS</Tab>
        <Tab>VISA</Tab>
      </TabsList>
      <TabPanel value={0}>
      <div style={{width:"auto",height:"280px",border:"0.1px solid gray",boxShadow:"0.1px 2px 0.1px 2px ", padding:"5px"}}>
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
    
    <Container>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch',flexDirection: 'row' },
    }}
    noValidate
    autoComplete="off"
    
    >
      
      <Box sx={{
      display:'inline-flex',flexDirection:'row'
    }}>
      <h3>From</h3>
      <TextField

        
          id="from-input"
          label="Type city name or airport"
          type="From"
          autoComplete="current-password"
          variant="filled"
        />
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
    </Container>
      </div >
      

      </TabPanel>
      <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel>
    </TabsUnstyled>
  );
}
