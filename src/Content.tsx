import React from 'react'

import { AiOutlineMobile, AiOutlineCloudServer } from 'react-icons/ai'
import { BsLock } from 'react-icons/bs'
import { VscGithubAlt } from 'react-icons/vsc'
import { HiOutlineUserAdd } from 'react-icons/hi'
import { RiLinkedinLine } from 'react-icons/ri'
import { CgInstagram } from 'react-icons/cg'

const DescriptionChar = ({ text, icon }): JSX.Element => {
	return (
		<div className="flex items-base my-1 mx-10 p-3 px-5 text-gray-600 rounded-lg transition duration-300 hover:bg-gray-300 hover:text-gray-500">
			{icon === 'platform' && (
				<AiOutlineMobile className="text-indigo-400 text-2xl" />
			)}
			{icon === 'auth' && <BsLock className="text-indigo-400 text-2xl" />}
			{icon === 'api' && (
				<AiOutlineCloudServer className="text-indigo-400 text-2xl" />
			)}
			{icon === 'seo' && (
				<HiOutlineUserAdd className="text-indigo-400 text-2xl" />
			)}
			<p className="ml-4 mr-8 text-lg">{text}</p>
		</div>
	)
}

interface Char {
	id: number
	text: string
	icon: string
}

interface Social {
	id: number
	social: string
	url: string
	ariaLabel: string
}

interface ContentProps {
	chars: Char[]
	social: Social[]
	header: string
}

const SocialAccounts = ({ social }) => {
	return (
		<nav className="flex items-center justify-center mt-16">
			{social.map((social) => (
				<a
					key={social.id}
					href={social.url}
					aria-label={social.ariaLabel}
					target="_blank"
					rel="noopener"
					className="mx-3 p-3 rounded-full text-indigo-500 text-2xl transition duration-300  hover:bg-indigo-100 "
				>
					{social.social === 'github' && <VscGithubAlt />}
					{social.social === 'linkedin' && <RiLinkedinLine />}
					{social.social === 'instagram' && <CgInstagram />}
				</a>
			))}
		</nav>
	)
}

const Content: React.FC<ContentProps> = ({ chars, social, header }) => {
	return (
		<main className="w-full pb-2 pt-6">
			<h1 className="text-center text-gray-800 text-2xl font-bold">{header}</h1>
			{chars.map((char) => (
				<DescriptionChar key={char.id} text={char.text} icon={char.icon} />
			))}
			<SocialAccounts social={social} />
		</main>
	)
}

export default Content
