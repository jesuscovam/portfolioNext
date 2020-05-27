import React, { useContext } from 'react'
import { ContentContext } from './context/ContentProvider'
import { makeStyles } from '@material-ui/core/styles'
import Description from './Description'
import Stack from './Stack'
import Portfolio from './Portfolio'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		border: '1px solid #eaeaea',
		borderRadius: '10px',
		height: theme.spacing(50),
		width: theme.spacing(50),
		marginTop: theme.spacing(1),
	},
}))

const MainWindow = ({ chars, portfolio, stack, social }): JSX.Element => {
	const { route } = useContext(ContentContext)
	const classes = useStyles()
	return (
		<section className={classes.root}>
			{route.state === 'description' && (
				<Description chars={chars} social={social} />
			)}
			{route.state === 'stack' && <Stack stack={stack} />}
			{route.state === 'portfolio' && <Portfolio projects={portfolio} />}
		</section>
	)
}

export default MainWindow
