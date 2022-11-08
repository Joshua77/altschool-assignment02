//import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../styles/nav.css'

/*export const Navbar = () => {
  return( <div className="navel">
    <nav className="navel">
      
      <li><NavLink to= '/' className='z'>Home</NavLink></li> 
      <li><NavLink to= '/Signup'>Signup</NavLink></li>  
      <li><NavLink to= '/Nested'>Nested</NavLink></li> 
      <li><NavLink to= '/User'>Users</NavLink></li>
    </nav>
    </div>
    
  )
}*/


function Navbar() {
  return (
    <header class="header">
    <h1 class="logo"><a href="#"> ASSIGNMENT </a></h1>
    <nav>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/Signup"> Signup </Link>
        </li>
        <li>
          <Link to="/Nested"> Nested </Link>
        </li>
        <li>
          <Link to="/User"> User </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}


export default Navbar;