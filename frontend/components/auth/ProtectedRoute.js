

import { useAuth } from '@/context/AuthContext';
import React from 'react'

const ProtectedRoute = ({children}) => {
    const{user,isLoading} = useAuth();
    if(!user || isLoading) return null;
    const {username,email} = user;
    return children;
}

export default ProtectedRoute