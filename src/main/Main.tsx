import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
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
  },
  content: {
    height: '100vh',
    width: '100%',
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

      <Grid className={classes.content} container justify="center" spacing={3}>
        {/* <Grid item xs={12}>
          <div className={classes.paper}>
            <Clock />
          </div>
        </Grid> */}

        <Grid item>
          <Typography display="block" variant="h3">
            Full stack developer (MERN)
            <Divider></Divider>
            Software Engineer at ST Engineering
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
              Experienced full stack developer, team-oriented and disciplined.
              <br></br>
              Independent, fast learner and is quick to adapt.
              <br></br>
              Certified ScrumMaster with 2 years of practicing scrum.
            </Typography>
        </Grid>

        <Grid item>
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
