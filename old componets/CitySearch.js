import React, {  useState } from 'react';
import cities  from "../src/travel_website/city-data/sk.json"


import DropDown from './Dropdown';



function CitySearch(props) {




  const [dropdown,setDropdown] =useState(false)
  

  const array = cities.map(a=>a.city)//

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
async function dropdownOption (value){
    await delay(150);
    setDropdown(value)
}


  

  const [searchResult, setSearchResult] = useState([]);
//console.log(searchResult.length)

  const [state,setState] = useState({iterator:0,city:""})
  
    function arrowFind(key){
    const arrowUp = key==="ArrowUp"?true:false
    const ArrowDown = key==="ArrowDown"?true:false
    const enter = key ==="Enter" ? true:false

    

    if (enter===true){
      props.Setvalue({location:state.city})
    }

    //console.log(searchResult.length)
    

    // chyby občas prejde cez všetko 
    // nesfunkcneny enter 
    // ked hoverujem stale mama aktivny zosednutie  
   /* if(searchResult.length === 0){
      //console.log(searchResult.length)
        
      setState(oldVal=>{
        return{iterator:0,city:""}
      })*/
    //console.log(searchResult.length)
 
    if(searchResult.length > 0){
      

 
     //   console.log(state)
      }

      if(ArrowDown===true&& state.iterator<5){
        
        setState(oldVal=>{
          return{iterator:oldVal.iterator+1,city:searchResult[oldVal.iterator]}
        })
       // console.log(state)
      }
      if(arrowUp===true&& state.iterator >= 0){
        setState(oldVal=>{
          return{iterator:oldVal.iterator-1,city:searchResult[oldVal.iterator]}
        })
        
      }
   }

  


  function handleSearch(event) {
    
    
    const input = event.target.value;

    props.Setvalue ({location: input})
   
    if (input.length > 0) {
      const normalizedInput = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      setSearchResult(array.filter(word => word.toLowerCase().includes(input.toLowerCase()) || word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(normalizedInput.toLowerCase())).slice(0, 5));
      
    } else {
      setSearchResult([]);
    }
    
  }



  return (
    <>
      <input className="search-input"
             type="text" 
             value={props.value} 
             onChange={handleSearch} 
             placeholder='I want to go'
             onFocus={()=>dropdownOption(true)}
             onBlur={()=>dropdownOption(false)}
             onKeyDown={(event)=>arrowFind(event.key)}
             
             />

   {dropdown && props.value.length >0 && <ul className='locations-active'>
        { searchResult.map(word => (
         <DropDown  key={word} 
                    id={word} 
                    color={state.city} 
                    Setvalue={props.Setvalue} 
                    value={word}/>
        ))}
      </ul>}
    </>
  );
}

export default CitySearch;

/*{dropdown && props.value.length >0 && <ul className='locations-active'>
{ searchResult.map(word => (
  <li id={word} 
      onClick={(event)=>props.Setvalue( {location:event.target.id}) } 
      key={word}
     // style={{color:"red"}}
     > 
      <FontAwesomeIcon icon={faLocationPin} /> 
      {word}
  </li>
))}
</ul>}*/