import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;

        }
    })

    return (
        <div>
            <h1>Users: {users.length}</h1>
        </div>
    );
};

export default UserManagement;