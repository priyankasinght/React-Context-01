import React,{useContext} from "react";
import ThemeContext from '../Context';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {isLight,changeTheme} = useContext(ThemeContext)

  return (
    <div>
        <div>Geekster</div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
        <br></br>
        <Link to="/service">Service</Link>
        <br></br>
        <button onClick={()=>{changeTheme()}}>Toggal Theme to {isLight?"Dark":"Light"}</button>   
    </div>
  )
}

export default Navbar