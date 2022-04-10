import { Container, Stack } from '@mui/material';
import { Box, height, width } from '@mui/system';
import React from 'react';


const Namefield = () => {

const Box1 ={

width:'80%',
height:'370px',
backgroundColor:'red'



}

    return (
        <>
        <Container >
          <Box sx={{display:'flex'}}>
        <Box style={Box1} name="1st box">


        </Box>

        <Box style={{height:"Box1.height",width:"20%",backgroundColor:"blue",flex:""}}  name="2nd box">


        </Box >

        
        </Box>

        {/* passanger details */}

        <Box sx={{height:"684px",width:"80%",bgcolor:'green',display:'flex',flexDirection:'column'}}>

          <Stack sx={{height:'56px',width:'100%',bgcolor:'gray'}}>


          </Stack>

          <Stack sx={{height:'50px',width:'100%',bgcolor:'yellow'}}>


          </Stack>


        </Box>
        

        </Container>
        
        </>
    );
}

export default Namefield;
