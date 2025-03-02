import { createContext, useReducer } from "react";
import NewReducer from "./NewsReducer";

const NewsContext = createContext()

export const NewsProvider = ({children})=>{

    const initialState ={

allNews:[
    
  ]

    }

    const [state,dispatch]=useReducer(NewReducer,initialState)

    return(
        <NewsContext.Provider
        value={{...state,dispatch}}
        >
        {children}
        </NewsContext.Provider>
    )
}

export default NewsContext