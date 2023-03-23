import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="logo" href="#">
                <p>LIBRARY</p>
            </div>
            <nav>
                {/* all */}
                <div>
                    <Link to="/">HOME</Link>
                    <Link to="/catalog">CATALOG</Link>
                    <Link to="/ganre">GANRES</Link>
                </div>

                {/* users */}
                {isAuthenticated && (
                    <div>
                        <Link to="/createBook">CREATE BOOK</Link>
                        <Link to="/logout">LOGOUT</Link>
                        <span>{userEmail}</span>
                    </div>
                )}

                {/* guest */}
                {!isAuthenticated && (
                    <div>
                        <Link to="/login">LOGIN</Link>
                        <Link to="/register">REGISTER</Link>
                    </div>
                )}
            </nav>
        </ header>
    );
};