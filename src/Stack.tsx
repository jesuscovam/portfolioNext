import React from 'react'
import { useFade } from './utils/customHooks'
import { animated } from 'react-spring'
import { SiGraphql, SiNextDotJs, SiReact } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

interface Char {
	id: number
	text: string
}

interface ContentProps {
	chars: Char[]
	header: string
}

const TechStack: React.FC<ContentProps> = ({ header, chars }) => {
	const { props } = useFade()
	return (
		<animated.section style={props} className="w-full px-1">
			<h1 className="text-2xl font-black text-center mb-3">{header}</h1>

			{chars.map((item) => (
				<div
					key={item.id}
					className="flex items-base my-3 mx-14 p-3 px-3 text-lg text-gray-600 rounded-lg transition duration-300 hover:bg-gray-300 hover:text-gray-500"
				>
					{item.id === 1 && <SiReact className="text-indigo-400 text-2xl" />}

					{item.id === 2 && <SiGraphql className="text-indigo-400 text-2xl" />}
					{item.id === 3 && <FaAws className="text-indigo-400 text-2xl" />}
					{item.id === 4 && (
						<SiNextDotJs className="text-indigo-400 text-2xl" />
					)}
					<p className="ml-3">{item.text}</p>
				</div>
			))}
		</animated.section>
	)
}

interface StackProps {
	stack: Char[]
}

const Stack: React.FC<StackProps> = ({ stack }) => {
	return (
		<main className="px-16 pt-6">
			<TechStack header="Stack" chars={stack} />
		</main>
	)
}

export default Stack
