import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({routes}) => {
    return (
        <nav>
        {routes.map((route)=>{
            return (
            <div key={route}>
             <Link to={route}>{route}</Link>
            </div>
            )
        })}
        </nav>
    )
}

export default Navbar;