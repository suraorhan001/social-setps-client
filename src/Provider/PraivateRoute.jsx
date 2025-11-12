import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PraivateRoute = ({children}) => {
 const {user} = use(AuthContext)
 const location = useLocation()
if(user && user?.email){
  return children
}
  if(!user)  {
    return <Navigate state={location.pathname} to= '/login'></Navigate>
  }
};

export default PraivateRoute;