import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const Box5 = () => {
    return (
        <>
        
        <Box sx={{width:'100%',
      height:'480px',
      bgcolor:'blue',
      margin:'10px',
      display:'flex',
      flexDirection:'column'
      }}>
              
        <Box sx={{width:'100%',height:'40px',display:'flex',bgcolor:'#E7F3E6',alignItems:'center',justifyContent:'space-between'}}>

          <Typography sx={{
            width:'170px',
            height:'40px',
            bgcolor:'#0D8404',
            fontFamily:'Rubik',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRight:'2px solid gray'
            }}>Flight Details</Typography>

<Typography sx={{
            width:'170px',
            height:'40px',
            bgcolor:'#E7F3E6',
            fontFamily:'Rubik',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRight:'1px solid gray'
            }}>Flight Details</Typography>

<Typography sx={{
            width:'170px',
            height:'40px',
            bgcolor:'#E7F3E6',
            fontFamily:'Rubik',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRight:'1px solid gray'
            }}>Fare summary</Typography>

<Typography sx={{
            width:'170px',
            height:'40px',
            bgcolor:'#E7F3E6',
            fontFamily:'Rubik',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRight:'1px solid gray'
            }}>Cancellation</Typography>

<Typography sx={{
            width:'170px',
            height:'40px',
            bgcolor:'#E7F3E6',
            fontFamily:'Rubik',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRight:'1px solid gray'
            }}>Date Change</Typography>

<Typography sx={{
            width:'170px',
            height:'40px',
            bgcolor:'#E7F3E6',
            fontFamily:'Rubik',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRight:'1px solid gray'
            }}>Baggage</Typography>

<Typography sx={{
            width:'170px',
            height:'40px',
            bgcolor:'#E7F3E6',
            fontFamily:'Rubik',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRight:'1px solid gray'
            }}>Fare Rules</Typography>


          

          </Box>        
      </Box>
        </>
    );
}

export default Box5;
