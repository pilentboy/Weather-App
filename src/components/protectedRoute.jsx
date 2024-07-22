import React from 'react';
import { Outlet, useLocation , Navigate} from 'react-router-dom';

const ProtectedRoute = () => {
    
    const location=useLocation()

    return location.state ? <Outlet/> : <Navigate to='/'/>
   
}

export default ProtectedRoute;
