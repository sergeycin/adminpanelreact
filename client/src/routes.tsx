import {Route,Routes } from 'react-router-dom'
import Main from './components/main/main'
import News from './components/news/newslist'
import NewsSingle from './components/news/newssingle'
import Service from './components/service/service'
import History from './components/history/history'
import Contacts from './components/contacts/contacts'
import TestDrive from './components/TestDrive/TestDrive'
import FormTestDrive from './components/TestDrive/formTestDrive'
import Models from './components/models/models'
import AutoService from './components/service/autoservice'
import Parts from './components/service/parts'
import AutoSalon from './components/history/autosalon'
export const MyRoutes : React.FC = () => {

  return(
    <>

      <Routes > 
         <Route path="/" element={<Main/>}/>  
         <Route path="/news" element={<News/>}/>  
         <Route path="/news/:id" element={<NewsSingle/>}/>  

         <Route path="/service" element={<Service/>}/>  
         <Route path="/autoservice" element={<AutoService/>}/>  
         <Route path="/parts" element={<Parts/>}/>  
         <Route path="/history" element={<History/>}/>  
         <Route path="/autosalon" element={<AutoSalon/>}/>  
         <Route path="/contacts" element={<Contacts/>}/>
         <Route path="/testdrive" element={<TestDrive/>}/>    
         <Route path="/testdrive/:id" element={<FormTestDrive/>}/>    

         <Route path="/models" element={<Models/>}/>    
           </Routes>
    </>
      
  
      )

  }