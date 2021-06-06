import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import TopAppBar from '../components/TopAppBar';
import { skills } from '../constants/ConstantList';
import selfie from '../assets/images/selfie.jpg';
import Typical from 'react-typical';

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    background: '#FFFFFF',
    padding: 40, // IMPORTANT NOTE: This is the workaround given by material ui as Grid spacing will result in negative margin and unwanted horizontal scroll bar (https://material-ui.com/components/grid/#negative-margin)
  },
  appBar: {
    background: theme.palette.primary.dark,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={10}
        style={{ flexGrow: 1, paddingTop: 20 }}
      >
        <Grid item container justify="center" alignItems="center" style={{ fontSize: 100, height: '95vh' }}>
          <Typical
            steps={['Hello!', 1000, 'I\'m Ian.', 1500]}
            loop={Infinity}
            wrapper="p"
          />
        </Grid>

        <Grid item>
          <Typography display="block" variant="h3">
            Full Stack Developer (MERN)
            <Divider></Divider>
            Software Engineer at ST Engineering
          </Typography>
        </Grid>

        <Grid item>
          <Box boxShadow={10}>
            <Card style={{ width: '10vw' }}>
              <CardMedia component="img" image={selfie} title="Selfie of Ian" />
            </Card>
          </Box>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            Certified ScrumMaster since Dec 2019
          </Typography>
        </Grid>

        <Grid item>
          <div className={classes.paper}>
            <Button
              variant="contained"
              color='secondary'
              onClick={() => { downloadResume(); }}
              href="https://drive.google.com/uc?export=download&id=1QaPeoy7GYOQCFNp9lNQkgPBmSLv34eji"
            >
              <Typography>
                Click here to download my resume
              </Typography>
            </Button>
          </div>
        </Grid>

        <Grid item container direction="column" justify="center" alignItems="center">
          <Typography variant="h4">
            Contact
          </Typography>

          <Typography variant="body1">
            iangoh1994@gmail.com
          </Typography>

          <Typography variant="body1">
            91699114
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4">
            Skills
          </Typography>

          {skillsTypo}
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
