import React, { useContext } from 'react'
import { ContentContext } from './context/ContentProvider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Description from './Description'
import Stack from './Stack'
import Portfolio from './Portfolio'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: theme.spacing(50),
		width: theme.spacing(50),
		marginTop: theme.spacing(1),
	},
}))

const MainWindow = ({ chars, projects, stack }): JSX.Element => {
	const { route } = useContext(ContentContext)
	const classes = useStyles()
	return (
		<Grid item component={Paper} className={classes.root}>
			{route.state === 'description' && <Description chars={chars} />}
			{route.state === 'stack' && <Stack stack={stack} />}
			{route.state === 'portfolio' && <Portfolio projects={projects} />}
		</Grid>
	)
}

export default MainWindow
