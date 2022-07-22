import React from 'react'
import {BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import CreateUser from './pages/createUser/CreeateUser'
import List from './pages/List/llst'
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
       <Route path="/admin/create" element={<CreateUser/>}/>  
       <Route path="/admin/createModel" element={<List/>}/>  
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

