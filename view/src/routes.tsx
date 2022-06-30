import React from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/login/login'

const MyRoutes: React.FC = () => {
return(
    <BrowserRouter>
 <Routes > 
  
  <Route path="/admin" element={<Login/>}/>  

    </Routes>
    </BrowserRouter>  
)
  
   
}

export default MyRoutes;