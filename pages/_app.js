import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import ContentProvider from '../src/context/ContentProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import '../styles/tailwind.css'

export default function MyApp(props) {
	const { Component, pageProps } = props

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<React.Fragment>
			<Head>
				<title>jesusc.dev</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta name="Description" content="JS developer website" />
				<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider theme={theme}>
				<ContentProvider>
					<CssBaseline />
					<Component {...pageProps} />
				</ContentProvider>
			</ThemeProvider>
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}
