import React from 'react'
import { useAuthenticationStorage } from '../../Features/user/data/local/user_local_data_sources';
import { Navigate } from 'react-router-dom';

export const RouterGuard = ({children}) => {
    
    const {user} = useAuthenticationStorage();

     if(user.rol.includes("admin")){

        return children ;
     }
     
    
    return (

    <Navigate to={"/dashboard"}/>
        
    
  )
}
