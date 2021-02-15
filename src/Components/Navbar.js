import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({routes}) => {
    return (
        <nav>
        {routes.map((route)=>{
            return (
             <Link to={route} key={route} className="navLink">{route}</Link>
            )
        })}
        </nav>
    )
}

export default Navbar;