import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Card, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import TopAppBar from '../components/TopAppBar';
import { skills } from '../constants/ConstantList';
import selfie from '../assets/images/selfie.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    width: '100%',
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
      <Grid className={classes.content} container spacing={10} alignItems="center">
        <TopAppBar />
        <Grid item container justify="center" alignItems="center" spacing={10} xs={12}>
          <Grid item>
            <Typography display="block" variant="h3">
              Full stack developer (MERN)
              <Divider></Divider>
              Software Engineer at ST Engineering
            </Typography>
          </Grid>

          <Grid item>
            <Card style={{ width: '50%' }}>
              <CardMedia component="img" image={selfie} title="Selfie of Ian" />
            </Card>
          </Grid>
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
