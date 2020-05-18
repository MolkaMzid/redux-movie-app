const init=[{name:"The Call of the Wild",rate:4,link:"https://www.myegy.io/files/img/content/9/849/1585620216.200_300.jpg",id:Math.random(),description:"The Call of the Wild Description"},
{name:"Transplant",rate:2,link:"https://www.myegy.io/files/img/content/9/978/1587049729.200_300.jpg",id:Math.random(),description:"Transplant Description"},
{name:"Supergirl",rate:4,link:"https://www.myegy.io/files/img/content/0/534/1570477109.200_300.jpg",id:Math.random(),description:"Supergirl Description"},
{name:"Bad Boys for Life",rate:3,link:"https://www.myegy.io/files/img/content/9/689/1579263996.200_300.jpg",id:Math.random(),description:"Bad Boys for Life Description"}]
const SetMovieListReducer=(state=init,action)=>{
    if(action.type==="ADD_MOVIE"){
        return[...state,action.payload]
    }
    else if(action.type==="EDIT_MOVIE"){
        return state.map(el=>(el.id===action.payload.id)?action.payload.NewValue:el)
    }else if(action.type==="DELETE_Movie"){
        return state.filter(el=>(el.id!==action.payload))
    }
   else return state;
}

export default SetMovieListReducer;