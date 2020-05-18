const SetTitreReducer=(state="",action)=>{
    if(action.type==="TITLE"){
        return action.payload
    }else return state
}

export default SetTitreReducer;