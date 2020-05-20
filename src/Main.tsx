import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import MainNav from './MainNav'
import MainWindow from './MainWindow'

const useStyles = makeStyles((theme) => ({
	main: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
}))

const Main = (): JSX.Element => {
	const classes = useStyles()
	return (
		<Grid component={Paper} item xs={12} md={6} square className={classes.main}>
			<MainNav />
			<MainWindow />
		</Grid>
	)
}

export default Main
