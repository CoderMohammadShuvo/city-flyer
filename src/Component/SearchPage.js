import * as React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/material';



const Searchpage = () => {
  return (
    <Container sx={{display:'flex',width:'auto',height:'1000px',bgcolor:'red',flexDirection:'column'}}>
      {/* 1st box start */}
      <Box sx={{width:'100%',height:'60px',bgcolor:'blue',margin:'10px',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
      
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'130px',height:'30px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'215px',height:'30px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'215px',height:'30px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'120px',height:'30px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'110px',height:'30px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'119px',height:'30px'}}>

      </Box>
      

      </Box>
      {/* 1st box end */}

      {/* 2nd box start */}
      <Box sx={{width:'100%',height:'80px',bgcolor:'blue',margin:'10px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'60px',height:'80px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'175px',height:'80px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'175px',height:'80px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'175px',height:'80px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'175px',height:'80px'}}>

      </Box>
      <Box sx={{bgcolor:'GrayText',margin:'3px',width:'60px',height:'80px'}}>

      </Box>
      </Box>
      {/* 2nd box end */}

      {/* 3rd box start */}

      <Box sx={{width:'100%',height:'56px',bgcolor:'blue',margin:'10px'}}>

      </Box>
      {/* 3rd box end */}
      <Box sx={{width:'100%',height:'240px',bgcolor:'blue',margin:'10px'}}>

      </Box>
      <Box sx={{width:'100%',height:'480px',bgcolor:'blue',margin:'10px'}}>

      </Box>

    </Container>
  );
}

export default Searchpage;
