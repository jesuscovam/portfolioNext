import React, { useState } from 'react'
import Content from './Content'
import { useFade } from './utils/customHooks'
import { animated } from 'react-spring'

const Description = () => {
	const [chars] = useState([
		{ id: 1, text: 'Aplicaciones para Desktop y Movil', icon: 'platform' },
		{ id: 2, text: 'E-Commerce', icon: 'ecommerce' },
		{ id: 3, text: 'Panel de Administrador', icon: 'panel' },
		{ id: 4, text: 'SEO', icon: 'seo' },
	])
	const { props } = useFade()
	return (
		<animated.div style={props}>
			<Content chars={chars} header="Servicios" />
		</animated.div>
	)
}

export default Description
