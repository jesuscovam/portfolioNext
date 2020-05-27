import React, { useContext, useState } from 'react'
import { ContentContext } from './context/ContentProvider'
import DescriptionIcon from '@material-ui/icons/Description'
import FolderIcon from '@material-ui/icons/Folder'
import IconButton from '@material-ui/core/IconButton'
import CodeIcon from '@material-ui/icons/Code'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	nav: {
		display: 'flex',
		justifyContent: 'center',
		width: theme.spacing(50),
		border: '1px solid #eaeaea',
		color: theme.palette.primary.dark,
		borderRadius: '10px',
		transition: 'color 0.15s ease, border-color 0.15s ease',
		'&:hover, &:active, &:focus': {
			borderColor: theme.palette.primary.main,
		},
	},
	navItem: {
		display: 'flex',
		color: 'inherit',
		margin: theme.spacing(1),
		fontSize: '0.9em',
		fontFamily: 'Roboto',
		'&:hover, &:active, &:focus': {
			color: theme.palette.primary.main,
		},
	},
	navText: {
		fontWeight: 500,
	},
}))

interface NavItemProps {
	text: string
	onClick: () => void
}

const NavItem: React.FC<NavItemProps> = ({ text, onClick }) => {
	const classes = useStyles()
	return (
		<IconButton className={classes.navItem} onClick={onClick}>
			{text === 'Descripción' && <DescriptionIcon color="primary" />}
			{text === 'Stack' && <CodeIcon color="primary" />}
			{text === 'Portfolio' && <FolderIcon color="primary" />}
			<h2 className={classes.navText}>{text}</h2>
		</IconButton>
	)
}

const MainNav = (): JSX.Element => {
	const [navItems] = useState([
		{ id: 1, text: 'Descripción', param: 'DESCRIPTION' },
		{ id: 2, text: 'Stack', param: 'STACK' },
		{ id: 3, text: 'Portfolio', param: 'PORTFOLIO' },
	])
	const classes = useStyles()
	const { dispatch } = useContext(ContentContext)
	const changeNav = (component: string) => dispatch({ type: component })
	return (
		<nav className={classes.nav}>
			{navItems.map((item) => (
				<NavItem
					key={item.id}
					text={item.text}
					onClick={() => changeNav(item.param)}
				/>
			))}
		</nav>
	)
}

export default MainNav
