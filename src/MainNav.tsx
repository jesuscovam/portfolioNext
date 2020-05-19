import React from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton'
import CodeIcon from '@material-ui/icons/Code';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    nav:{
        display: 'flex',
        justifyContent: 'center',
        width: theme.spacing(50)
    },
    navItem:{
        display: 'flex',
        margin: theme.spacing(1),

    }
}))

interface NavItemProps {
    children: React.ReactNode
    text: string
}

const NavItem: React.FC<NavItemProps> = ({children, text}) =>{
    const classes = useStyles()
    return(
        <IconButton className={classes.navItem} >
            {children}
            <Typography>{text}</Typography>
        </IconButton>
    )
}

const MainNav = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.nav} elevation={2} variant="elevation">
            <NavItem text="Descripción">
                <DescriptionIcon color="primary"/>
            </NavItem>
            <NavItem text="Stack">
                <CodeIcon color="primary"/>
            </NavItem>
            <NavItem text="Portfolio">
                <FolderIcon color="primary" />
            </NavItem>
        </Paper>
    );
}

export default MainNav;
