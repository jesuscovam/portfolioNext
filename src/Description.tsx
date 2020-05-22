import React from 'react'
import Content from './Content'
import { useFade } from './utils/customHooks'
import { animated } from 'react-spring'

const Description = ({ chars, social }) => {
	const { props } = useFade()
	return (
		<animated.div style={props}>
			<Content chars={chars} social={social} header="Servicios" />
		</animated.div>
	)
}

export default Description
