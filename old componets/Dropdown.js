import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faLocationPin} from '@fortawesome/free-solid-svg-icons'




export default function DropDown(props){
    // tu budem ziskavať mapovany element 
    //pri sipke ziskam aktualny kluč 
    // pri šipken zmenik aktualny style 

    return(<li  id={props.id} 
                style={props.id===props.color?{backgroundColor:"#DCDCDC"}:{backgroundColor:""}}
                onClick={(event)=>props.Setvalue( {location:event.target.id}) } 
                ><FontAwesomeIcon icon={faLocationPin}  />{props.value}
            </li>)
}