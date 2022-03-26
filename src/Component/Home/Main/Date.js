import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function NativePickers() {
  return (
    <Stack sx={{display:'flex',flexDirection:'row',alignItems:'center'}} component="form" noValidate spacing={0}>
      <TextField
        id="date"
        label="Departure date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField
        id="date"
        label="Returning date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
     
    </Stack>
  );
}
