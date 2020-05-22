import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useFade } from './utils/customHooks'
import { animated } from 'react-spring'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100vh',
		backgroundColor: theme.palette.primary.dark,
		textAlign: 'right',
		alignItems: 'center',
		alignContent: 'right',
		color: 'white',
	},
	textHeader: {
		fontWeight: 900,
		fontSize: '2em',
		margin: theme.spacing(1),
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(1, 0, 0, 24),
		},
	},
	image: {
		[theme.breakpoints.up('md')]: {
			marginLeft: theme.spacing(24),
		},
	},
}))

export default function Hero(): JSX.Element {
	const classes = useStyles()
	const { props } = useFade()
	return (
		<Grid item component={Paper} xs={12} md={6} className={classes.root} square>
			<animated.div style={props}>
				<img src="/jcmdevwhite.png" alt="jesus" className={classes.image} />
			</animated.div>
			<p className={classes.textHeader}>
				Desarrollador Web <br />
				@jesuscovam👨‍💻
			</p>
		</Grid>
	)
}
