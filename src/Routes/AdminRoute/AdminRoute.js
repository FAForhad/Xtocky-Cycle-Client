import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import useAdmin from '../../Hooks/useAdmin';
import { Authcontext } from '../../UserContext/UserContext';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }
    if (isAdmin === 'Admin') {
        return children
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>


};

export default AdminRoute;