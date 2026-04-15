import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = (Children) => {

        const {user, loading} = useAuth();

        if(loading) {
            return <div>
                <span className='loading loading-infinity loading-xl'></span>
            </div>
        }

        if(!user){
            return <Navigate to="/login"></Navigate>
        }

        return Children;
};

export default PrivateRoute;