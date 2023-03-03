import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
  import Hamburger from 'hamburger-react'
import { useState } from 'react'

  

export default function Header (){

    const [isOpen, setOpen] = useState(false)

    return(
    <nav className='header-nav'>
        <div className="nav--logo">
            <span className='logo--unwind'>UNWIND</span>
            <span className='logo--cabins'>CABINS</span>
        </div>
        <div className='nav--defaultInfo'>
            <span>Our cabins</span>
            <span>Get inspired</span>
            <span>Gift a stay</span>
            <span>About us</span>
            
                <FontAwesomeIcon icon={faCircleUser} />
            
        </div>
        <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
        
    </nav>)
}