import React, { useState } from 'react'
import Content from './Content'

const Description = () => {
	const [chars] = useState([
		{ id: 1, text: 'Aplicaciones para Desktop y Movil', icon: 'platform' },
		{ id: 2, text: 'E-Commerce', icon: 'ecommerce' },
		{ id: 3, text: 'Panel de Administrador', icon: 'panel' },
		{ id: 4, text: 'SEO', icon: 'seo' },
	])

	return <Content chars={chars} header="Servicios" />
}

export default Description
