import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useFade } from './utils/customHooks'
import { animated } from 'react-spring'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-around',
		padding: theme.spacing(3),
		width: theme.spacing(50),
	},
	techSection: {
		display: 'flex',
		flexDirection: 'column',
	},
	textHeader: {
		fontSize: '2em',
		fontWeight: 800,
		color: theme.palette.primary.dark,
		textAlign: 'center',
		marginBottom: theme.spacing(3),
	},
	charItem: {
		display: 'flex',
		margin: theme.spacing(1),
	},
	charText: {
		fontWeight: 300,
		textAlign: 'center',
		fontSize: '1.2em',
		color: theme.palette.primary.dark,
		margin: theme.spacing(1),
	},
	iconPlatform: {
		display: 'flex',
	},
}))

interface Char {
	id: number
	text: string
}

interface ContentProps {
	chars: Char[]
	header: string
}

const TechStack: React.FC<ContentProps> = ({ header, chars }) => {
	const classes = useStyles()
	const { props } = useFade()
	return (
		<animated.section style={props}>
			<Typography className={classes.textHeader}>{header}</Typography>
			{chars.map((item) => (
				<Typography key={item.id} className={classes.charText}>
					{item.text}
				</Typography>
			))}
		</animated.section>
	)
}

const Stack = ({ stack }) => {
	const classes = useStyles()
	return (
		<main className={classes.root}>
			<TechStack header="Stack" chars={stack} />
		</main>
	)
}

export default Stack
