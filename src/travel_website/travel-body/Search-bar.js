
import { useState } from "react"
import AddTravellers from "./Add-travellers"
import FinalCalendar from "./FinalCalendar"


import IneVyhladvanie from "./IneVyhladvanie"



export default function SearchBar(){

    const [searchState,setSearchState] = useState({location:"",date:""})

    return (<>       
            <form className="searchBar--container"  >
          
                    <IneVyhladvanie setSearchState={setSearchState} 
                                    location={searchState.location}/> 

                                    <FinalCalendar/>
                          
             
                    <AddTravellers/>
                <input 
                    className="searchButton"
                    type={"button"} 
                    value={"Find avilable cabins"}
                    onClick={()=>console.log(searchState)}
                    />
            
            </form></>
    )
}