const SetRateReducer=(state="",action)=>{
    if(action.type==="RATE"){
        return action.payload
    }else return state
}

export default SetRateReducer;