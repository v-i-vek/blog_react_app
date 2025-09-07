import React from 'react';
import { Box } from '@mui/material';
import { PrimarySearchAppBar } from './Dashbaord';
import { useAuth } from '../context/AuthContext';

export function DashboardLayout() {
    const { user } = useAuth();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <PrimarySearchAppBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                <h1>Dashboard</h1>
                <p>Welcome {user?.email}</p>
                <p>Hello this is dashboard</p>
            </Box>
        </Box>
    );
}
