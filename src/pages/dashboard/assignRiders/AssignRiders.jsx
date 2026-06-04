import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup');
            return res.data;
        }
    })
    return (
        <div>
            Assign a rider: {parcels.length}
        </div>
    );
};

export default AssignRiders;