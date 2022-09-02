import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">Marvel</Link>
            
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink 
                    className="nav-link nav-item text-white"
                    to={"/personajes"}>
                        Personajes
                    </NavLink>

                    <NavLink 
                    className="nav-link nav-item text-white"
                    to={"/comics"}>
                        Comics
                    </NavLink>

                    <NavLink 
                    className="nav-link nav-item text-white"
                    to={"/series"}>
                        Series
                    </NavLink>
                </ul>

            </div>
        </div>
    </nav>
  )
}
