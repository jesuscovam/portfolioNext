import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { Link } from '@material-ui/core'
import { useFade } from './utils/customHooks'
import { animated } from 'react-spring'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		padding: theme.spacing(2),
		width: theme.spacing(50),
	},
	paper: {
		backgroundColor: theme.palette.primary.main,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: theme.spacing(30),
		color: 'white',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	stackSection: {
		margin: theme.spacing(1, 3, 1, 1),
	},
	textHeader: {
		fontSize: '2em',
		fontWeight: 800,
		color: theme.palette.primary.dark,
		textAlign: 'center',
		marginBottom: theme.spacing(3),
	},
	img: {
		height: theme.spacing(4.8),
		width: theme.spacing(10),
		marginLeft: theme.spacing(2),
	},
	textStack: {
		fontSize: '1em',
	},
}))

interface ProjectProps {
	img: string
	imgAlt: string
	stack: string[]
	url: string
}

const Project: React.FC<ProjectProps> = ({ img, imgAlt, stack, url }) => {
	const { props } = useFade()
	const classes = useStyles()
	return (
		<Link href={url} target="_blank" rel="noopener">
			<Paper elevation={3} variant="elevation" className={classes.paper}>
				<animated.div style={props}>
					<img src={img} alt={imgAlt} className={classes.img} />
				</animated.div>
				<section className={classes.stackSection}>
					{stack.map((tool, index) => (
						<Typography key={index} className={classes.textStack}>
							{tool}
						</Typography>
					))}
				</section>
			</Paper>
		</Link>
	)
}

const Portfolio = () => {
	const classes = useStyles()
	const { props } = useFade()
	const [projects] = useState([
		{
			id: 1,
			name: 'Tulis',
			stack: ['React', 'Material UI', 'Firebase'],
			img: '/tulis.png',
			imgAlt: 'Logo tulis',
			url: 'https://tulis.app',
		},
	])
	return (
		<animated.main style={props}>
			<main className={classes.root}>
				<Typography className={classes.textHeader}>Portfolio</Typography>
				{projects.map((project) => (
					<Project
						key={project.id}
						img={project.img}
						imgAlt={project.imgAlt}
						stack={project.stack}
						url={project.url}
					/>
				))}
			</main>
		</animated.main>
	)
}

export default Portfolio
