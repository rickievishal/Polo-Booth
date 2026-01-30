

import { useAuth } from '@/context/AuthContext';
import React from 'react'
import LoadingPage from '../ui/LoadingPage';

const ProtectedRoute = ({children}) => {
    const{user,isLoading} = useAuth();
    if(!user || isLoading) return <LoadingPage/>;
    const {username,email} = user;
    return children;
}

export default ProtectedRoute