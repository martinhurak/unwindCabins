import { useState } from "react"

export default function ShopCard(props){

    const [state,setState]= useState(false)

    function handleChange(value){
        setState(value)
    }
   
    
   
    return (    
    <div className="shop--card" 
        onMouseEnter={()=>handleChange(true)}
        onMouseLeave={()=>handleChange(false)}>
    <img src={props.img} alt="shopImg"/>
    <h3>{props.name}</h3>
    {state && <span className="shopCard--moreInfo" onClick={()=>props.setClick({img: props.img , name:props.name})}>More Info</span>}
  
    
</div>)
}