 export const ThemeReducer =(state,action)=>{
    switch (action.type) {
case "CHANGE_THEME":
    return{
    theme : state.theme ? false:true
    }   

        default :
        return state
    }
}
