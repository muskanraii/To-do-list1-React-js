import React  from "react";

function Todolist(props){

 const[click , setclick]= React.useState(false)

 function clicked(){
  setclick(prevalue =>{
    return !prevalue 
  } );
 }
  return(<div onClick={clicked} >
    <li style={{textDecoration: click ? "line-through" : "none"}}>{props.text}</li>
    </div> )
}

export default Todolist;