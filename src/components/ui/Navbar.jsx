import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { types } from '../../types';

export const Navbar = () => {

    const navigate = useNavigate()

    const { user, dispatch } = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({ type: types.logout })
        navigate('/login', { replace: true });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Logo
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => "nav-item nav-link" + (isActive ? " active":"") }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => "nav-item nav-link" + (isActive ? " active":"") }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => "nav-item nav-link" + (isActive ? " active":"") }
                        to="/search"
                    >
                        Search
                    </NavLink>

                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info my-auto'>
                        { user.name }
                    </span>

                    <button
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}