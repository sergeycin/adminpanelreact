import React from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Main from './pages/main/main'

export const useRoutes = (isAuthenticated:any)=>{

  if(isAuthenticated){
    return(
  <>
    <Routes > 
       

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

