import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import HowLongWereYouHere from './HowLongWereYouHere';

const TopAppBar: React.FC = () => {
  
  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar>
        <Grid container direction="row" justify="space-between">
          <Typography>
            Ian Goh
          </Typography>
          
          <HowLongWereYouHere />
        </Grid>

      </Toolbar>

    </AppBar>
  );
}

export default TopAppBar;
