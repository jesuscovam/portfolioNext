import React, { useContext } from 'react'
import { ContentContext } from './context/ContentProvider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Description from './Description'
import Stack from './Stack'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: theme.spacing(50),
		width: theme.spacing(50),
		marginTop: theme.spacing(1),
	},
}))

const MainWindow = (): JSX.Element => {
	const { route } = useContext(ContentContext)
	const classes = useStyles()
	return (
		<Grid item component={Paper} className={classes.root}>
			{route.state === 'description' && <Description />}
			{route.state === 'stack' && <Stack />}
		</Grid>
	)
}

export default MainWindow
