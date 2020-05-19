import React from 'react';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Hero from '../src/Hero'

const useStyles = makeStyles(theme =>({
  root:{
    display: 'flex'
  }
}))

export default function Index() {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Hero />
    </Grid>
  );
}
