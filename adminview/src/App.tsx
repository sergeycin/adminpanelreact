import React from 'react';
import { useAuth } from './hooks/auth.hook';

import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { MyRoutes } from './routes';
import Navbar from './pages/navbar/navbar';
import LeftSidaBar from './pages/leftSidebar/leftSideBar';

function App() {
  const {token,login,logout,userId} = useAuth()
 const isAuthenticated:any = !!token //boolean

  return (
   <>
      <AuthContext.Provider value={{
      token,login,logout,userId, isAuthenticated
    }}>

{isAuthenticated && <Navbar/>}
<div className="wrapper">
{isAuthenticated && <LeftSidaBar/>}

<MyRoutes Authenticated={isAuthenticated} />


</div>

  
  
    </AuthContext.Provider>


   </>
 

  );
}

export default App;
