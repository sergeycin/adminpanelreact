import React from 'react';
import { useAuth } from './hooks/auth.hook';
import MyRoutes from './routes';
import { AuthContext } from "./context/AuthContext";

function App() {
  const {token,login,logout,userId} = useAuth()
  const isAuthenticated = !!token //boolean

  return (
   <>
      <AuthContext.Provider value={{
      token,login,logout,userId, isAuthenticated
    }}>
      
         <MyRoutes />
         
    </AuthContext.Provider>


   </>
 

  );
}

export default App;
