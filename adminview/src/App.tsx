import React from 'react';
import { useAuth } from './hooks/auth.hook';

import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, useRoutes } from 'react-router-dom';

function App() {
  const {token,login,logout,userId} = useAuth()
  const isAuthenticated:any = !!token //boolean
  const routes = useRoutes(isAuthenticated)
  return (
   <>
      <AuthContext.Provider value={{
      token,login,logout,userId, isAuthenticated
    }}>

  {isAuthenticated}
      {routes}   
   
   
         
    </AuthContext.Provider>


   </>
 

  );
}

export default App;
