import { useState } from "react";
import ShopCard from "./ShopCard";
import data from "./shopCard.json"

export default function Body() {
    const [state,setState] = useState(false)
    
    const [info,setInfo] = useState()

    function handlecard (img,name) {
        setState(oldVal=>!oldVal)
        setInfo(img,name)
    }
    console.log(info)
 
    const shopCard = data.map(a =><ShopCard key={a.id} setClick={handlecard}  {...a}/>)
    return(
        <div className="shop--body">
            {shopCard}
            {state&& <div className="big--card" onClick={()=>setState(oldVal=>!oldVal)}>
                <img src={info.img} alt="oka"/>
                <h3>{info.name}</h3>
            </div>}
        </div>
    )
}