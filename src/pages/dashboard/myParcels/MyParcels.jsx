import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : parcels = []} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?.email=${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h1 className="text-bold text-4xl">My all Parcels here {parcels.length}</h1>
        </div>
    );
};

export default MyParcels;