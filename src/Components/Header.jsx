import React from "react";
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <header>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/contact">Contact</Link>
        </header>
    )
}

export default Header