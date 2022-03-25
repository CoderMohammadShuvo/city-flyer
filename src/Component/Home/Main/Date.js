import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function NativePickers() {
    return (
      <Stack component="form" noValidate spacing={3}>
        <Box sx={{display:'inline-flex',flexWrap:'wrap'}}>
        <TextField
          id="date"
          label="Departure Date"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Returning Date"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Box>
      </Stack>
    );
  }