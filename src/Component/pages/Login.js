import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Login.css'

import SignInSide from '../pages/Signin';


const Login = () => {
    return (
        
        <Container style={{}}>
            {/* <Box style={{backgroundColor:'red'}} sx={{width:'70%',height:'auto',display:'flex',justifyItems:'center',alignItems:'center',padding:'0px 50px 0px 50px'}}>
            
            <Box style={{backgroundColor:'black'}} sx={{height:'400px',width:'800px',display:'flex'}}>
            
            <Slider/>

            </Box>
            </Box>

            <Box style={{backgroundColor:'gray'}} sx={{width:'30%',height:'auto'}}>
            
            </Box> */}
            <SignInSide/>
            
        </Container>
    );
}

export default Login;
