import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);

    const history = useHistory()

    const handleLogout = () => {

        dispatch({
            type: types.logout,
        })
        history.replace("/login")
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ps-2" 
                to="/"
            >
                PelisPedia
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/peliculas"
                    >
                        Peliculas
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/series"
                    >
                        Series
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/buscador"
                    >
                        Buscador
                    </NavLink>
                </div>
            </div>

                    <span className="nav-item nav-link text-info"> 

                    {user.name} 

                    </span>

                    <nav>
                    
                    <button
                        className="nav-item nav-link btn btn-outline"
                        onClick={handleLogout} 
                    >
                        Logout
                    </button>
                    </nav>
           
        </nav>
    )
}