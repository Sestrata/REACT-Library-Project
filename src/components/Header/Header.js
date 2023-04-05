import { NavLink } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { Time } from "./Time/Time";

export const Header = () => {
    const { isAuthenticated, username } = useAuthContext();

    return (
        <header className="header">
            <div className="logo" href="#">
                <p>LIBRARY</p>
                <span><Time /></span>
            </div>
            <nav>
                {/* all */}
                <div>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/catalog">CATALOG</NavLink>
                    <NavLink to="/ganre">GANRES</NavLink>
                </div>

                {/* users */}
                {isAuthenticated && (
                    <div>
                        <NavLink to="/createBook">CREATE BOOK</NavLink>
                        <NavLink to="/about">ABOUT</NavLink>
                        <NavLink to="/logout">LOGOUT</NavLink>
                        <NavLink to="/profile"><span>{username}'s PROFILE</span></NavLink>
                    </div>
                )}

                {/* guest */}
                {!isAuthenticated && (
                    <div>
                        <NavLink to="/login">LOGIN</NavLink>
                        <NavLink to="/register">REGISTER</NavLink>
                    </div>
                )}
            </nav>
        </ header>
    );
};
