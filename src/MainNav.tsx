import React, { useContext, useState } from 'react'
import { ContentContext } from './context/ContentProvider'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
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
	},
	navItem: {
		display: 'flex',
		margin: theme.spacing(1),
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
			<Typography>{text}</Typography>
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
		<Paper className={classes.nav} elevation={2} variant="elevation">
			{navItems.map((item) => (
				<NavItem
					key={item.id}
					text={item.text}
					onClick={() => changeNav(item.param)}
				/>
			))}
		</Paper>
	)
}

export default MainNav
