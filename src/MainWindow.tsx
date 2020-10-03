import React, { useContext } from 'react'
import { ContentContext } from './context/ContentProvider'
import Description from './Description'
import Stack from './Stack'
import Portfolio from './Portfolio'

const MainWindow = ({ chars, portfolio, stack, social }): JSX.Element => {
	const { route } = useContext(ContentContext)
	return (
		<section className="h-full shadow-lg rounded-lg">
			{route.state === 'description' && (
				<Description chars={chars} social={social} />
			)}
			{route.state === 'stack' && <Stack stack={stack} />}
			{route.state === 'portfolio' && <Portfolio projects={portfolio} />}
		</section>
	)
}

export default MainWindow
