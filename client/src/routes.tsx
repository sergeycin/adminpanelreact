import {Route,Routes } from 'react-router-dom'
import Main from './components/main/main'
export const MyRoutes : React.FC = () => {

  return(
    <>

      <Routes > 
         <Route path="/" element={<Main/>}/>  
           </Routes>
    </>
      
  
      )

  }