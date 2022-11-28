import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import useSeller from '../../Hooks/useSeller';
import { Authcontext } from '../../UserContext/UserContext';

const SellersRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }
    if (isSeller !== 'Seller') {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children


};

export default SellersRoute;