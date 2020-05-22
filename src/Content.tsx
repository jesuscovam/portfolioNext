import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
		margin: theme.spacing(0, 0, 3),
	},
	charItem: {
		display: 'flex',
		margin: theme.spacing(1),
	},
	charText: {
		fontWeight: 300,
		fontSize: '1.2em',
		color: theme.palette.primary.dark,
		margin: theme.spacing(0, 1),
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
			<p className={classes.charText}>{text}</p>
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

interface Social {
	id: number
	social: string
	url: string
	ariaLabel: string
}

interface ContentProps {
	chars: Char[]
	social: Social[]
	header: string
}

const SocialAccounts = ({ social }) => {
	const classes = useStyles()
	return (
		<nav className={classes.social}>
			{social.map((social) => (
				<a
					key={social.id}
					href={social.url}
					aria-label={social.ariaLabel}
					target="_blank"
					rel="noopener"
				>
					{social.social === 'github' ? (
						<GitHubIcon color="primary" fontSize="large" />
					) : (
						<LinkedInIcon color="primary" fontSize="large" />
					)}
				</a>
			))}
		</nav>
	)
}

const Content: React.FC<ContentProps> = ({ chars, social, header }) => {
	const classes = useStyles()
	return (
		<main className={classes.root}>
			<p className={classes.textHeader}>{header}</p>
			{chars.map((char) => (
				<DescriptionChar key={char.id} text={char.text} icon={char.icon} />
			))}
			<SocialAccounts social={social} />
		</main>
	)
}

export default Content
