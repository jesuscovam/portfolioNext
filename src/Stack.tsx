import React, { useState } from 'react'
import Content from './Content'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DesktopMacIcon from '@material-ui/icons/DesktopMac'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import WebIcon from '@material-ui/icons/Web'
import LanguageIcon from '@material-ui/icons/Language'

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

const TechStack = ({ header, chars }) => {
	const classes = useStyles()
	return (
		<section>
			<Typography className={classes.textHeader}>{header}</Typography>
			{chars.map((item) => (
				<Typography key={item.id} className={classes.charText}>
					{item.text}
				</Typography>
			))}
		</section>
	)
}

const Stack = () => {
	const classes = useStyles()
	const [frontEnd] = useState([
		{ id: 1, text: 'React' },
		{ id: 2, text: 'Material UI' },
		{ id: 3, text: 'NextJS' },
		{ id: 4, text: 'TypeScript' },
		{ id: 5, text: 'Jest' },
		{ id: 6, text: 'Firebase' },
	])

	return (
		<main className={classes.root}>
			<TechStack header="Stack" chars={frontEnd} />
		</main>
	)
}

export default Stack
