import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import LuggageIcon from '@mui/icons-material/Luggage';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import ChairIcon from '@mui/icons-material/Chair';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { Button } from '@mui/material';
const Box4 = () => {
    return (
        <>
        <Box sx={{
        width:'100%',
        height:'240px',
        bgcolor:'white',
        margin:'10px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        border:'1px solid gray'
        }}>
          <Box sx={{display:'flex'}}>

          
          <Box sx={{width:'80%',height:'180px',display:'flex',flexDirection:'column'}}>
          <Box sx={{
            height:'93px',
            width:'100%',
            bgcolor:'white',
            margin:'1px',display:'flex',justifyContent:'space-between',borderBottom:'1px solid gray'}}>

              <Box sx={{width:'230px',height:'90px',bgcolor:'white',display:'flex'}}>
                <Box>
              <img width={50} src="https://play-lh.googleusercontent.com/O58aF0wv2kgyxAgTNwnjBvlwC4In4NyHXH0K2UqS1aeAOtdf186xXa7IqHzEjGxEGA" alt="" srcset="" />
              </Box>
              <Box sx={{width:'210px',height:'screen',display:'flex',flexDirection:'column'}}>
                <Typography sx={{fontFamily:'Rubik',fontWeight:'bold',fontSize:'14px',color:'rgba(0, 0, 0, 0.7)'}}>Biman bangladesh Airlines</Typography>
                <Typography sx={{fontFamily:'Rubik',fontWeight:'medium',fontSize:'14px',color:'rgba(0, 0, 0, 0.7)'}}>BG 404 +2 </Typography>
                <Typography sx={{fontFamily:'Rubik',fontWeight:'medium',fontSize:'14px',color:'rgba(0, 0, 0, 0.7)'}}>Boeing 787 +2</Typography>
              
              </Box>
              </Box>

              <Box sx={{width:'198px',height:'90px',bgcolor:'white',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <Typography sx={{fontSize:'22px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>DHAKA</Typography>
              <Typography sx={{fontSize:'40px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>19:30</Typography>
              </Box>


              <Box sx={{
                width:'230px',
                height:'90px',
                bgcolor:'white',
                display:'flex',
                justifyContent:'center',
                flexDirection:'column'
                }}>
                <Box sx={{
                  display:'flex',
                  height:'20px',
                  bgcolor:'white'
                  }}>
              <Typography sx={{
                fontFamily:'Rubik',
                fontWeight:'bold'}} >
                DAC 
                </Typography>
                <hr style={{
                  width:'45px',
                  height:'1px',
                  backgroundColor:'black',
                  outlineColor:'black',
                  borderBlockColor:'black',
                  borderBlockEndColor:'black'}} />
                <Box sx={{width:'20px',height:'20px',bgcolor:'gray',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Typography sx={{color:'white',fontWeight:'bold'}}>2</Typography>
                </Box>
                <hr style={{width:'45px',height:'1px',backgroundColor:'black',outlineColor:'black',borderBlockColor:'black',borderBlockEndColor:'black'}} />
                <Typography sx={{fontFamily:'Rubik',fontWeight:'bold'}} >
                YYZ 
                </Typography>
                </Box>

                <Box sx={{
                  display:'flex',
                  height:'20px',
                  bgcolor:'white'
                  }}>
              <FlightTakeoffIcon/>
                <hr style={{
                  width:'130px',
                  height:'1px',
                  backgroundColor:'black',
                  outlineColor:'black',
                  borderBlockColor:'black',
                  borderBlockEndColor:'black'}} />
                
                
                <FlightLandIcon/>
                </Box>

                <Box sx={{
                  display:'flex',
                  height:'20px',
                  bgcolor:'white'
                  }}>
              
                <hr style={{
                  width:'45px',
                  height:'1px',
                  backgroundColor:'black',
                  outlineColor:'black',
                  borderBlockColor:'black',
                  borderBlockEndColor:'black'}} />
                
                <Typography sx={{fontFamily:'Rubik'}}>6h 25m</Typography>
                <hr style={{width:'45px',height:'1px',backgroundColor:'black',outlineColor:'black',borderBlockColor:'black',borderBlockEndColor:'black'}} />
                
                </Box>
                

              </Box>
              <Box sx={{width:'220px',height:'90px',bgcolor:'white',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <Typography sx={{fontSize:'40px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>22:30</Typography>
              <Typography sx={{fontSize:'22px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>TORONTO</Typography>
              
              </Box>

          </Box>
          <Box sx={{
            height:'93px',
            width:'100%',
            bgcolor:'white',
            margin:'1px',display:'flex',justifyContent:'space-between',borderBottom:'2px solid gray'}}>

<Box sx={{
            height:'93px',
            width:'100%',
            bgcolor:'white',
            margin:'1px',display:'flex',justifyContent:'space-between'}}>

              <Box sx={{width:'230px',height:'90px',bgcolor:'white',display:'flex'}}>
                <Box>
              <img width={50} src="https://play-lh.googleusercontent.com/O58aF0wv2kgyxAgTNwnjBvlwC4In4NyHXH0K2UqS1aeAOtdf186xXa7IqHzEjGxEGA" alt="" srcset="" />
              </Box>
              <Box sx={{width:'210px',height:'screen',display:'flex',flexDirection:'column'}}>
                <Typography sx={{fontFamily:'Rubik',fontWeight:'bold',fontSize:'14px',color:'rgba(0, 0, 0, 0.7)'}}>Biman bangladesh Airlines</Typography>
                <Typography sx={{fontFamily:'Rubik',fontWeight:'medium',fontSize:'14px',color:'rgba(0, 0, 0, 0.7)'}}>BG 404 +2 </Typography>
                <Typography sx={{fontFamily:'Rubik',fontWeight:'medium',fontSize:'14px',color:'rgba(0, 0, 0, 0.7)'}}>Boeing 787 +2</Typography>
              
              </Box>
              </Box>

              <Box sx={{width:'198px',height:'90px',bgcolor:'white',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <Typography sx={{fontSize:'22px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>DHAKA</Typography>
              <Typography sx={{fontSize:'40px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>19:30</Typography>
              </Box>


              <Box sx={{
                width:'230px',
                height:'90px',
                bgcolor:'white',
                display:'flex',
                justifyContent:'center',
                flexDirection:'column'
                }}>
                <Box sx={{
                  display:'flex',
                  height:'20px',
                  bgcolor:'white'
                  }}>
              <Typography sx={{
                fontFamily:'Rubik',
                fontWeight:'bold'}} >
                DAC 
                </Typography>
                <hr style={{
                  width:'45px',
                  height:'1px',
                  backgroundColor:'black',
                  outlineColor:'black',
                  borderBlockColor:'black',
                  borderBlockEndColor:'black'}} />
                <Box sx={{width:'20px',height:'20px',bgcolor:'gray',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Typography sx={{color:'white',fontWeight:'bold'}}>2</Typography>
                </Box>
                <hr style={{width:'45px',height:'1px',backgroundColor:'black',outlineColor:'black',borderBlockColor:'black',borderBlockEndColor:'black'}} />
                <Typography sx={{fontFamily:'Rubik',fontWeight:'bold'}} >
                YYZ 
                </Typography>
                </Box>

                <Box sx={{
                  display:'flex',
                  height:'20px',
                  bgcolor:'white'
                  }}>
              <FlightTakeoffIcon/>
                <hr style={{
                  width:'130px',
                  height:'1px',
                  backgroundColor:'black',
                  outlineColor:'black',
                  borderBlockColor:'black',
                  borderBlockEndColor:'black'}} />
                
                
                <FlightLandIcon/>
                </Box>

                <Box sx={{
                  display:'flex',
                  height:'20px',
                  bgcolor:'white'
                  }}>
              
                <hr style={{
                  width:'45px',
                  height:'1px',
                  backgroundColor:'black',
                  outlineColor:'black',
                  borderBlockColor:'black',
                  borderBlockEndColor:'black'}} />
                
                <Typography sx={{fontFamily:'Rubik'}}>6h 25m</Typography>
                <hr style={{width:'45px',height:'1px',backgroundColor:'black',outlineColor:'black',borderBlockColor:'black',borderBlockEndColor:'black'}} />
                
                </Box>
                

              </Box>
              <Box sx={{width:'220px',height:'90px',bgcolor:'white',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <Typography sx={{fontSize:'40px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>22:30</Typography>
              <Typography sx={{fontSize:'22px',fontWeight:'bold',fontFamily:'Rubik',color:'rgba(0, 0, 0, 0.7)'}}>TORONTO</Typography>
              
              </Box>

</Box>

          </Box>

            

          </Box>


          <Box sx={{width:'20%',height:'180px',bgcolor:'blueviolet',margin:'2px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',border:'1px solid gray'}}>

            <Box sx={{width:'200px',height:'40px',display:'flex',justifyContent:'center'}}>
            <Button  variant='contained'>Book now</Button>
            </Box>

            <Box sx={{width:'200px',height:'50px',bgcolor:'Background'}}>

            </Box>
            <Box sx={{width:'200px',height:'40px',bgcolor:'Background',marginTop:'1px'}}>

            </Box>

          </Box>
          </Box>

          
          <Box sx={{
            height:'43px',
            width:'100%',
            bgcolor:'white',
            margin:'3px',
            display:'flex',
            alignItems:'center',
            paddingLeft:'5px'}}>

            <Box sx={{
                width:'110px',
                height:'27px',
                display:'flex',
                justifyContent:'space-between',
                
                }}>
              <CheckIcon sx={{color:'#0D8404'}}/>
                <Typography sx={{color:'rgba(0, 0, 0, 0.6)',fontFamily:'Rubik',fontWeight:'bold'}}>Refundable</Typography>
              </Box>

              <Box sx={{
                width:'110px',
                height:'27px',
                display:'flex',
                justifyContent:'space-evenly',
                
                }}>
              <RamenDiningIcon sx={{color:'#0D8404'}}/>
                <Typography sx={{color:'rgba(0, 0, 0, 0.6)',fontFamily:'Rubik',fontWeight:'bold'}}>Meals</Typography>
              </Box>

              <Box sx={{
                width:'240px',
                height:'27px',
                display:'flex',
                justifyContent:'space-evenly',
                
                }}>
              <LuggageIcon sx={{color:'#0D8404'}}/>
                <Typography sx={{color:'rgba(0, 0, 0, 0.6)',fontFamily:'Rubik',fontWeight:'bold'}}>Baggage 20 KG, Cabin: 7 KG</Typography>
              </Box>

              <Box sx={{
                width:'130px',
                height:'27px',
                display:'flex',
                justifyContent:'space-evenly',
                
                }}>
              <AirlineSeatReclineNormalIcon sx={{color:'#0D8404'}}/>
                <Typography sx={{color:'rgba(0, 0, 0, 0.6)',fontFamily:'Rubik',fontWeight:'bold'}}>Seat allocation</Typography>
              </Box>

              <Box sx={{
                width:'110px',
                height:'27px',
                display:'flex',
                justifyContent:'space-evenly',
                
                }}>
              <ChairIcon sx={{color:'#0D8404'}}/>
                <Typography sx={{color:'rgba(0, 0, 0, 0.6)',fontFamily:'Rubik',fontWeight:'bold'}}>Lounge</Typography>
              </Box>

          </Box>

      </Box>
      {/* 4th box end */}

      
        </>
    );
}

export default Box4;
