import React from 'react'
import {BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Main from './pages/main/main'

export const MyRoutes : React.FC<{Authenticated: string}> = ({Authenticated}) => {

  if(Authenticated){
    console.log('login',Authenticated)
    return(
  <>
     {/* <Navigate to="/admin/main" /> */}
    <Routes > 
    <Route
        path="/admin"
        element={<Navigate to="/admin/main" replace />}
    />

       <Route path="/admin/main" element={<Main/>}/>  
         </Routes>
  </>
    

    )
 
  }

    return(
  <>
    <Routes > 
       
       <Route path="/admin" element={<Login/>}/>  
 
         </Routes>
    
  </>
    
    )
  

  
   
}

