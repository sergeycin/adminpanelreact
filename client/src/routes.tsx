import {Route,Routes } from 'react-router-dom'
import Main from './components/main/main'
import News from './components/news/newslist'
import NewsSingle from './components/news/newssingle'
import Service from './components/service/service'
import History from './components/history/history'
import Contacts from './components/contacts/contacts'
import TestDrive from './components/TestDrive/TestDrive'
import FormTestDrive from './components/TestDrive/formTestDrive'
import Models from './components/models/Models'
export const MyRoutes : React.FC = () => {

  return(
    <>

      <Routes > 
         <Route path="/" element={<Main/>}/>  
         <Route path="/news" element={<News/>}/>  
         <Route path="/news/:id" element={<NewsSingle/>}/>  

         <Route path="/service" element={<Service/>}/>  
         <Route path="/history" element={<History/>}/>  
         <Route path="/contacts" element={<Contacts/>}/>
         <Route path="/testdrive" element={<TestDrive/>}/>    
         <Route path="/testdrive/:id" element={<FormTestDrive/>}/>    

         <Route path="/models" element={<Models/>}/>    
           </Routes>
    </>
      
  
      )

  }