const SetDescReducer = (state="",action)=>{
    if(action.type==="DESCRIPTION"){
        return action.payload
    }else return state
}
export default SetDescReducer;