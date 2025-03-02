export const WeatherReducer=(state,action)=>{
    switch(action.type){
case "GET_WEATHER":
    return{
        ...state,
        api : action.payload
    }

default:
    return state
    }
}