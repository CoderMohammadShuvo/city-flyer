import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Margin, Search } from "@mui/icons-material";
import NativePickers from "./Date";

import UnstyledSelectSimple from "../../pages/Dropdown";
import Navbar from "../Navbar/Navbar";





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
    <>
    <Navbar/>

    <TabsUnstyled defaultValue={0} id="main">
      <TabsList>
        <Tab>FLIGHT</Tab>
        {/* <Tab>Two</Tab>
        <Tab>Three</Tab> */}
      </TabsList>
      <TabPanel value={0}>
        
        
        <Container sx={{display:'flex', justifyContent:'space-between',alignItems:'center',padding:'10px'}}  maxWidth="lg">
          
        <Box sx={{display:'flex',alignItems:'center'}}>
          <Box>
    <Typography >From</Typography>
      <TextField id="standard-basic" label="Type city name or airport" variant="standard" />
      </Box>
      <CompareArrowsIcon sx={{alignSelf:'end',margin:'10px 8px 0px 8px'}} />
        <Box>
      <Typography>To</Typography>
      <TextField id="standard-basic" label="Type city name or airport" variant="standard" />
      </Box>

      </Box>

{/* Date */}

      <Box >
        
      <NativePickers/>
      
      </Box>
      

        </Container>

        <Container sx={{display:'flex'}}>
          <Box sx={{display:'flex'}}>

          
          <Box>
            <Typography>
              <h5>Adults</h5>
              <p>12+ Years</p>
            </Typography>
          <UnstyledSelectSimple/>
          </Box>
          <Box>
            <Typography>
              <h5>Children</h5>
              <p>2-12 Years</p>
            </Typography>
          <UnstyledSelectSimple/>
          </Box>
          <Box>
            <Typography>
              <h5>Infants</h5>
              <p>0-23 Months</p>
            </Typography>
          <UnstyledSelectSimple/>
          </Box>
          </Box>

            <Box sx={{display:'flex',alignItems:'center'}}>
              <Button sx={
                {marginLeft:'200px',paddingInline:'100px',marginTop:'100px'}
              } variant="contained">Search</Button>
            </Box>

        </Container>
              

                  

        
      </TabPanel>
      
      {/* <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel> */}
    </TabsUnstyled>
    
    </>
  );
}
