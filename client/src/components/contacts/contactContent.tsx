import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"

import './contacts.scss'
import { useLanguage } from "../../context/LanguageContext"
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { useEffect } from "react"
import { fieldList } from "../../store/actions/contactsAction"
import Loader from "../loader/loader"
function ContactsContent() {
    const {lang,toggleLanguage} = useLanguage()
    const dispatch = useAppDispatch()
    const {error,loading,fields} = UseAppSelector(state => state.contactSlice)
    useEffect(()=>{
        dispatch(fieldList())
      
    },[])

    if(fields.length){
        return (
            <div className="map">
           <div className="container">
               <div className="map__row">
                   <div className="map__text">
                       <div className="map__text-head"><p>{lang == 'ru' ? fields[0].rutitle : fields[0].entitle}</p></div>
                   <div className="map__graduate">
                     <a href="#"> <img src="img/graduate.jpg" alt=""/></a> 
                       <p>{lang == 'ru' ? fields[0].rudescription : fields[0].endescription} </p>
                   </div>
                   <div className="map__contact">
                       {/* <p><i className="fas fa-map-marker-alt"></i>
                           Киевская ул., 187, Симферополь, Россия</p> */}
                           <p><i className="fas fa-mobile-alt"></i>
                               +7 (495)154-47-49</p>
                             
                                   <p><i className="fas fa-desktop"></i>
                                       https://lexus.ru</p>
                                       <hr />
                                       <div className="map__social">
                                       <a href="">  <i className="fab fa-instagram"></i></a>  
                                       <a href="">   <i className="fab fa-facebook-f"></i></a> 
                                       <a href="">   <i className="fab fa-vk"></i> </a> 
                                       </div>
                   </div>
                   <div className="map__button">
                       <a href="">  <button className="black-btn"> <p>{lang == 'ru' ? 'Модели авто' : 'Models auto'}</p> <span className="line"></span></button></a>  
                      </div>
                      <div className="map__button ">
                       <a href="">  <button className="black-btn white-btn"> <p>{lang == 'ru' ? 'Тест-драйв' : 'TestDrive'}</p> <span className="line"></span></button></a>  
                      </div>
                   </div>
                   <div className="map__yandex">
                   <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A22b18ca2fc60e96c6148c7aad28b71bedd98443f1ed2cc05e2b6661eefd9d3ed&amp;source=constructor" width="660" height="610" ></iframe>
                   </div>
               </div>
           </div>
       </div>
        
          
         
      )      
    }
    else{
        return(
            <div>    {loading && <Loader/>}</div>
        )
    }
  

}

export default ContactsContent