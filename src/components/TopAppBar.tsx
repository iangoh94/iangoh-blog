import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    flexGrow: 1,
  },
  appBar: {
    background: 'linear-gradient(to right, black 0%, green 100%)',
  },
}));

const TopAppBar: React.FC = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="static">
      <Toolbar className={classes.appBar}>
        <Typography>
          Ian Goh
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
