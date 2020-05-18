const SetLinkReducer=(state="",action)=>{
    if(action.type==="LINK"){
        return action.payload
    }else return state
}

export default SetLinkReducer;