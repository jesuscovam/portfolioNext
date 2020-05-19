import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import MainNav from './MainNav'

const useStyles = makeStyles(theme =>({
    main:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const Main = () => {
    const classes = useStyles()
    return (
        <Grid component={Paper} item xs={12} md={6} square className={classes.main}>
            <MainNav />
        </Grid>
    );
}

export default Main;
