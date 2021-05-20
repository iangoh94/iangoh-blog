import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    flexGrow: 1,
  },
}));

const TopAppBar: React.FC = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography>
          Ian Goh
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
