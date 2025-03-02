const NewReducer=(state,action)=>{
    switch(action.type){
case "GET_NEWS":
    return{
        ...state,
        allNews : action.payload
    }

        default:
            return state
    }
}

export default NewReducer