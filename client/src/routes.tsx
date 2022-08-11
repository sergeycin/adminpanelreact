import {Route,Routes } from 'react-router-dom'
import Main from './components/main/main'
import News from './components/news/newslist'
import NewsSingle from './components/news/newssingle'
import Service from './components/service/service'
export const MyRoutes : React.FC = () => {

  return(
    <>

      <Routes > 
         <Route path="/" element={<Main/>}/>  
         <Route path="/news" element={<News/>}/>  
         <Route path="/news/:id" element={<NewsSingle/>}/>  

         <Route path="/service" element={<Service/>}/>  
           </Routes>
    </>
      
  
      )

  }