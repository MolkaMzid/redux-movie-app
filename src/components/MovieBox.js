import React from 'react';
import { connect } from "react-redux";
import{Link} from 'react-router-dom';
const MovieBox=(props)=>{
    return(
        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      {props.MovieTab.filter(el=>el.rate>=(props.star.filter(el=>el.isColored===true).length)).filter(el=>el.name.toUpperCase().includes(props.search.toUpperCase())).map((el,i)=><div key={i}>
    <div>{"".padEnd(el.rate,"⭐")}</div>
    <img  className=""src={el.link} alt="link"></img>
    <p>{el.name}</p>
    <Link to={`/movie/${el.id}`}><button>Movie Description</button></Link>
    <button onClick={()=>props.EditBox(el.id,el.rate,el.name,el.link,el.descrption)}>Edite</button>
    <button onClick={()=>props.DeleteBox(el.id)}>Delete</button>
</div>)}


<div  style={{border:"1px solid black", width:"250px", height:"250px",textAlign:"center"}}>
           <span onClick={props.ShowBox}>Add Movie</span> 
             </div>
             <div style={{display:(props.Show)?"block":"none"}}>
                 <input type="text" placeholder="titre"  onChange={(e)=>props.SetTitre(e.target.value)}/>
                 <input type="text" placeholder="link"  onChange={(e)=>props.SetLink(e.target.value)}/>
                 <input type="text" placeholder="rate" onChange={(e)=>props.SetRate(e.target.value)}/>
                 <input type="text" placeholder="description" onChange={(e)=>props.SetDesc(e.target.value)}/>
                 <button onClick={()=>props.AddMovie({name:props.titre,link:props.link,rate:props.rate,descrption:props.descrption, id:Math.random()})}>Add</button>
             </div>
        </div>
    );
}


const mapDispatchToProps=(dispatch)=>{
    return{
       
        SetTitre:(a)=>dispatch({type:"TITLE",payload:a}),
        SetLink:(a)=>dispatch({type:"LINK",payload:a}),
        SetRate:(a)=>dispatch({type:"RATE",payload:a}),
        SetDesc:(a)=>dispatch({type:"DESCRIPTION",payload:a}),
        AddMovie:(input)=>dispatch({type:"ADD_MOVIE",payload:input}),
        EditBox:(id)=>{
            const newRate=prompt('new rate',"rate")
            const newName=prompt('new name',"name")
            const newLink=prompt('new link',"link")
            const newDesc=prompt('new link',"description")
            dispatch({type:"EDIT_MOVIE",payload:{id:id,NewValue:{rate:newRate,name:newName,link:newLink,description:newDesc}}})
        },
        DeleteBox:(id)=>dispatch({type:"DELETE_Movie",payload:id}),
       
        ShowBox:()=>dispatch({type:"SHOW"}),
        
    }
}

const mapStateToProps=(state)=>{
    return{
MovieTab:state.MovieTab,
search:state.InputValue,
star:state.StarTab,
Show:state.Show,
titre:state.titre,
link:state.link,
rate:state.rate,
description:state.description,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieBox);