import {Route,Routes } from 'react-router-dom'
import Main from './components/main/main'
import News from './components/news/newslist'
export const MyRoutes : React.FC = () => {

  return(
    <>

      <Routes > 
         <Route path="/" element={<Main/>}/>  
         <Route path="/news" element={<News/>}/>  
           </Routes>
    </>
      
  
      )

  }