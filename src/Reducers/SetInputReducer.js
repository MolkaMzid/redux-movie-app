const SetInputReducer=(state="",action)=>{
    if(action.type==="SET_INPUT"){
        return action.payload
    }else return state
}

export default SetInputReducer;