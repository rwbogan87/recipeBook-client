import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ routes, tokenCheck }) => {
    return (
        <>
            <nav>
                {routes.map((route) => {
                    return (
                        <Link to={route} key={route} className="navLink">{route}</Link>
                    )
                })}
            </nav>
            {tokenCheck}
        </>
    )
}

export default Navbar;