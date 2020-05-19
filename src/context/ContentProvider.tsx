import React, { useReducer, createContext } from 'react'

export const ContentContext = createContext(null)
interface State {
	state: string
}

const routeReducer = (state, action): State => {
	switch (action.type) {
		case 'DESCRIPTION':
			return {
				state: 'description',
			}
		case 'STACK':
			return {
				state: 'stack',
			}
		case 'PORTFOLIO':
			return {
				state: 'portfolio',
			}
		default:
			new Error()
	}
}

const ContentProvider = ({ children }): React.ReactNode => {
	const [route, dispatch] = useReducer(routeReducer, { state: 'description' })
	return (
		<ContentContext.Provider value={{ route, dispatch }}>
			{children}
		</ContentContext.Provider>
	)
}

export default ContentProvider
