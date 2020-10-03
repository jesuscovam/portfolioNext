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
		padding: theme.spacing(0.2),
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
		fontWeight: 300,
	},
}))

interface NavItemProps {
	text: string
	onClick: () => void
}

const NavItem: React.FC<NavItemProps> = ({ text, onClick, children }) => {
	const classes = useStyles()
	return (
		<span className="flex items-center p-3" onClick={onClick}>
			{children}
			<h2 className={classes.navText}>{text}</h2>
		</span>
	)
}

const MainNav = (): JSX.Element => {
	const classes = useStyles()
	const { dispatch } = useContext(ContentContext)
	const changeNav = (component: string) => dispatch({ type: component })
	return (
		<nav className={classes.nav}>
			<NavItem text="Descripción" onClick={() => changeNav('DESCRIPTION')} />
			<NavItem text="Stack" onClick={() => changeNav('STACK')} />
			<NavItem text="Portfolio" onClick={() => changeNav('PORTFOLIO')} />
		</nav>
	)
}

export default MainNav
