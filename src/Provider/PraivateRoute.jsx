import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PraivateRoute = ({children}) => {
 const {user,loading} = use(AuthContext)
 const location = useLocation()
if(user && user?.email){
  return children
}
  if (loading) return <Spinner />;
  if(!user)  {
    return <Navigate state={location.pathname} to= '/login'></Navigate>
  }
};

export default PraivateRoute;