import React, { useState } from 'react'
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
		flexDirection: 'column',
		padding: theme.spacing(3),
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
		fontSize: '1.2em',
		color: theme.palette.primary.dark,
		marginRight: theme.spacing(1),
	},
	iconPlatform: {
		display: 'flex',
	},
}))

const IconPlatform = () => {
	const classes = useStyles()
	return (
		<div className={classes.iconPlatform}>
			<DesktopMacIcon color="primary" />
			<SmartphoneIcon color="primary" />
		</div>
	)
}

const DescriptionChar = ({ text, icon }): JSX.Element => {
	const classes = useStyles()
	return (
		<div className={classes.charItem}>
			<Typography className={classes.charText}>{text}</Typography>
			{icon === 'platform' && <IconPlatform />}
			{icon === 'ecommerce' && <ShoppingCartIcon color="primary" />}
			{icon === 'panel' && <WebIcon color="primary" />}
			{icon === 'seo' && <LanguageIcon color="primary" />}
		</div>
	)
}

const Description = () => {
	const [chars] = useState([
		{ id: 1, text: 'Aplicaciones para Desktop y Movil', icon: 'platform' },
		{ id: 2, text: 'E-Commerce', icon: 'ecommerce' },
		{ id: 3, text: 'Panel de Administrador', icon: 'panel' },
		{ id: 4, text: 'SEO', icon: 'seo' },
	])
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Typography className={classes.textHeader}>Servicios</Typography>
			{chars.map((char) => (
				<DescriptionChar key={char.id} text={char.text} icon={char.icon} />
			))}
		</div>
	)
}

export default Description
