import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import TopAppBar from '../components/TopAppBar';
import Clock from '../components/Clock';
import { skills } from '../constants/ConstantList';

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    flexGrow: 1,
    background: '#FFFFFF',
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

  const skillsTypo = skills.map((s) => (
    <Typography>{s}</Typography>
  ))

  return (
    <div className={classes.root}>
      <TopAppBar />

      <Grid className={classes.content} container spacing={10} direction="column" alignItems="center">
        {/* <Grid item xs={12}>
          <div className={classes.paper}>
            <Clock />
          </div>
        </Grid> */}

        <Grid item justify="center">
          <Typography display="block" variant="h3">
            Full stack developer (MERN)
            <Divider></Divider>
            Software Engineer at ST Engineering
          </Typography>
        </Grid>

        <Grid item justify="center">
          <Typography variant="body1">
              Experienced full stack developer, team-oriented and disciplined.
              <br></br>
              Independent, a fast learner and is quick to adapt.
              <br></br>
              Certified ScrumMaster since Dec 2019
            </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4">
            Skills
          </Typography>

          {skillsTypo}
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
