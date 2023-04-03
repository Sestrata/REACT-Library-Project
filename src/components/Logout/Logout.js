import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';

export const Logout = () => {
    const { onLogout } = useAuthContext();

    useEffect(() => {
        onLogout(); /////////////////
    }, [onLogout]);

    return <Navigate to="/" />
};


// import { useContext, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';

// import { AuthContext } from '../../contexts/AuthContext';

// export const Logout = () => {
//     const {onLogout} = useContext(AuthContext);
    
//     useEffect(() => {
//         onLogout();
//     }, [onLogout]);

//     return <Navigate to="/" />
// };