import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { Time } from "../Time/Time";

export const Header = () => {
    const { isAuthenticated, username } = useAuthContext();

    return (
        <header className="header">
            <div className="logo" href="#">
                <p>LIBRARY</p>
                <Time />
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
                        <Link to="/profile"><span>{username}'s PROFILE</span></Link>
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
