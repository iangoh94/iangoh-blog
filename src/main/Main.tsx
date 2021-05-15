import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import TopAppBar from '../components/TopAppBar';
import Clock from '../components/Clock';

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    flexGrow: 1,
    background: '#29ff74',
  },
  appBar: {
    background: theme.palette.primary.dark,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const downloadResume = () => {
  console.log('download button was clicked!');
};

const Main: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <TopAppBar />

      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <div className={classes.paper}>
            <Clock />
          </div>
        </Grid> */}
        
        
        <Grid item xs={12}>
          <div className={classes.paper}>
            <Button 
              variant="contained" 
              color='secondary' 
              onClick={() => { downloadResume(); }} 
              href="https://drive.google.com/uc?export=download&id=1DW8KybrpOFSSQoAGcTqXgvOJVuUsjjv2"
            >
              <Typography>
                Click here to download my resume
              </Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
