
const ShowReducer=(state=false,action)=>{
    if(action.type==="SHOW"){
        return!state
    }else if(action.type==="ADD_MOVIE"){
        return false
    }
    else return state
}
export default ShowReducer;