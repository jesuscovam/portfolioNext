import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DesktopMacIcon from '@material-ui/icons/DesktopMac'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import WebIcon from '@material-ui/icons/Web'
import LanguageIcon from '@material-ui/icons/Language'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(3),
		width: theme.spacing(50),
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
	social: {
		display: 'flex',
		justifyContent: 'center',
		padding: theme.spacing(2),
		margin: theme.spacing(4, 1, 1, 1),
	},
	iconButton: {
		width: theme.spacing(5),
		display: 'flex',
		alignItems: 'start',
		alignContent: 'start',
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

interface Char {
	id: number
	text: string
	icon: string
}

interface ContentProps {
	chars: Char[]
	header: string
}

const SocialAccounts = () => {
	const classes = useStyles()
	return (
		<nav className={classes.social}>
			<a
				href="https://www.linkedin.com/in/jesus-cova-262882171/"
				target="_blank"
				rel="noopener"
				aria-label="linkedin personal page"
				aria-labeledby="linkedin personal page"
			>
				<LinkedInIcon
					color="primary"
					fontSize="large"
					aria-label="linkedin personal page"
					aria-labeledby="linkedin personal page"
				/>
			</a>
			<a
				href="https://github.com/jesuscovam/"
				target="_blank"
				rel="noopener"
				aria-label="github personal page"
				aria-labeledby="github personal page"
			>
				<GitHubIcon
					color="primary"
					fontSize="large"
					aria-label="github personal page"
					aria-labeledby="github personal page"
				/>
			</a>
		</nav>
	)
}

const Content: React.FC<ContentProps> = ({ chars, header }) => {
	const classes = useStyles()
	return (
		<main className={classes.root}>
			<Typography className={classes.textHeader}>{header}</Typography>
			{chars.map((char) => (
				<DescriptionChar key={char.id} text={char.text} icon={char.icon} />
			))}
			<SocialAccounts />
		</main>
	)
}

export default Content
