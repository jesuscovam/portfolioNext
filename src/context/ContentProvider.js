import React, {useReducer, createContext} from 'react'

export const ContentContext = createContext()

const routeReducer = (state, action) =>{
    switch(action.type){
        case 'DESCRIPTION':
            return {
                state: "description"
            }
        case 'STACK':
            return{
                state: "stack"
            }
        case 'PORTFOLIO':
            return{
                state: 'portfolio'
            }
        default: new Error()
    }
}

const ContentProvider = ({children}) =>{
    const [route, dispatch] = useReducer(routeReducer, {state: "description"})
    return(
        <ContentContext.Provider value={{route, dispatch}}>
            {children}
        </ContentContext.Provider>
    )
}