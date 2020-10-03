import React from 'react'
import { useFade } from './utils/customHooks'
import { animated } from 'react-spring'

export default function Hero(): JSX.Element {
	const { props } = useFade()
	return (
		<div className="flex flex-col justify-center items-center w-full md:max-w-xl h-screen bg-indigo-400 text-white">
			<animated.div style={props}>
				<img src="/jcmdevwhite.png" alt="jesus" className="md:ml-48" />
			</animated.div>
			<div className="flex flex-col mt-4 md:ml-48 text-2xl text-right">
				<h1 className="font-bold">Javascript Developer</h1>
				<p>Jesus Cova 👋</p>
			</div>
		</div>
	)
}
