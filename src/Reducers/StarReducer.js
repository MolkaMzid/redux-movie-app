const init=[{id:1,icon:"☆",isColored:false},{id:2,icon:"☆",isColored:false},{id:3,icon:"☆",isColored:false},
{id:4,icon:"☆",isColored:false},{id:5,icon:"☆",isColored:false}]
const StarReducer=(state=init,action)=>{
    if(action.type==="STAR_COLOR"){
        return state.map(el=>(el.id===action.payload)?{id:el.id,icon:el.icon,isColored:!el.isColored}:el)
    }
    return state;
}
export default StarReducer;