import { createContext, useReducer } from "react";
import { ThemeReducer } from "./ThemeReducer";

const ThemeContext = createContext()

export const ThemeProvider =({children})=>{

const Exit =JSON.parse( localStorage.getItem("theme") )
    
const initialState={ 
    theme : Exit || false,
}

const [state, dispatch]=useReducer(ThemeReducer,initialState )

    return(
        <ThemeContext.Provider
       value={{...state,dispatch }}
       >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext