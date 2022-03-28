import { Container, Grid } from '@mui/material';
import React from 'react';

const Searchpage = () => {
    return (
        <Grid sx={{width:'auto',height:'600px'}} style={{backgroundColor:'red'}}  rowGap={2} container>

            <Grid  style={{backgroundColor:'green'}} item lg={12}>

            </Grid>
            <Grid style={{backgroundColor:'blue'}} item lg={12}>

            </Grid>
            <Grid style={{backgroundColor:'aqua'}} item lg={12}>

            </Grid>
            <Grid style={{backgroundColor:'ButtonHighlight'}} item lg={12}>

            </Grid>
            <Grid style={{backgroundColor:'MenuText'}} item lg={12}>

            </Grid>
            <Grid style={{backgroundColor:'bisque'}} item lg={12}>

            </Grid>
        </Grid>
    );
}

export default Searchpage;
