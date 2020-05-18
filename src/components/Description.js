import React from 'react';
import { connect } from "react-redux";
const Description=(props)=>{
    return(<div>
{ props.MovieTab.filter(el=>(el.id===Number(props.match.params.id)).map(el=><div>{el.description}</div>))}
    </div>);
}
const mapStateToProps=(state)=>{
    return{
        MovieTab:state.MovieTab
    }
}
export default connect(mapStateToProps,null) (Description);