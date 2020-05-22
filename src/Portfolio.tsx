import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
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
		margin: theme.spacing(1, 0, 3),
	},
	img: {
		height: theme.spacing(4.8),
		width: theme.spacing(10),
		margin: theme.spacing(0.2, 0, 0, 2),
	},
	textStack: {
		fontSize: '1em',
		margin: theme.spacing(0.2),
	},
	link: {
		textDecoration: 'none',
	},
}))

interface ProjectProps {
	id?: number
	img: string
	imgAlt: string
	stack: string[]
	url: string
}

const Project: React.FC<ProjectProps> = ({ img, imgAlt, stack, url }) => {
	const { props } = useFade()
	const classes = useStyles()
	return (
		<a href={url} target="_blank" rel="noopener" className={classes.link}>
			<Paper elevation={3} variant="elevation" className={classes.paper}>
				<animated.div style={props}>
					<img src={img} alt={imgAlt} className={classes.img} />
				</animated.div>
				<section className={classes.stackSection}>
					{stack.map((tool, index) => (
						<p key={index} className={classes.textStack}>
							{tool}
						</p>
					))}
				</section>
			</Paper>
		</a>
	)
}

interface PortfolioProps {
	projects: ProjectProps[]
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
	const classes = useStyles()
	const { props } = useFade()
	return (
		<animated.main style={props} className={classes.root}>
			<h1 className={classes.textHeader}>Portfolio</h1>
			{projects.map((project) => (
				<Project
					key={project.id}
					img={project.img}
					imgAlt={project.imgAlt}
					stack={project.stack}
					url={project.url}
				/>
			))}
		</animated.main>
	)
}

export default Portfolio
