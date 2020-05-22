import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hero from '../src/Hero'
import Main from '../src/Main'
import data from '../src/data/data.json'

const useStyles = makeStyles({
	root: {
		display: 'flex',
	},
})

export default function Index({ data }): JSX.Element {
	const classes = useStyles()
	return (
		<Grid container className={classes.root}>
			<Hero />
			<Main chars={data.chars} projects={data.portfolio} stack={data.stack} />
		</Grid>
	)
}

export function getStaticProps() {
	return {
		props: { data },
	}
}
