import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme =>({
    root:{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#14213D',
        textAlign: 'right',
        alignItems: 'center',
        alignContent: 'right',
        color: 'white',
    },
    textHeader:{
        fontWeight: 900,
        fontSize: '3em',
        margin: theme.spacing(1),
        [theme.breakpoints.up("md")]:{
            margin: theme.spacing(1,0,0,24),
        }
    }
}))

export default function Hero(){
    const classes = useStyles()
    return(
        <Grid item component={Paper} xs={12} md={6} className={classes.root} square>
            <Typography className={classes.textHeader}>Desarrollador Web <br/>@jesuscovam👨‍💻</Typography>
        </Grid>
    )
}