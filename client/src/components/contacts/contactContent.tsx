import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"

import './contacts.scss'
import { useLanguage } from "../../context/LanguageContext"
import { UseAppSelector } from "../../hooks/redux"
import { getContacts } from "../../store/actions/mainAction"
import { useEffect } from "react"
function ContactsContent() {
    const {lang,toggleLanguage} = useLanguage()
            const {error,loading,contactdata} = UseAppSelector(state => state.mainSlice)
    useEffect(()=>{
        getContacts()
        console.log('data',contactdata)
    },[])
        
    return (



      <div className="map">
     <div className="container">
         <div className="map__row">
             <div className="map__text">
                 <div className="map__text-head"><p>Лексус - Автодель</p></div>
             <div className="map__graduate">
               <a href="#"> <img src="img/graduate.jpg" alt=""/></a> 
                 <p>Киевская ул., 187, Симферополь, Россия </p>
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
                 <a href="">  <button className="black-btn"> <p>Предложения</p> <span className="line"></span></button></a>  
                </div>
                <div className="map__button ">
                 <a href="">  <button className="black-btn white-btn"> <p>Предложения</p> <span className="line"></span></button></a>  
                </div>
             </div>
             <div className="map__yandex">
                 <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A85ff14cd102e623b465776a5252c54aefd7d7892aaccaf48048224f928c98805&amp;source=constructor" width="660" height="610" ></iframe>
             </div>
         </div>
     </div>
 </div>
  
    
   
)

}

export default ContactsContent