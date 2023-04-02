
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const IsPublish = ({
    children
}) => {
    const { isPublish } = useAuthContext();

    if (isPublish) {
        return <Navigate to='/' />
    };

    return children ? children : <Outlet />
};