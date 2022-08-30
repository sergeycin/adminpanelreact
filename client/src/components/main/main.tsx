
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import './main.scss'
import './greeting.scss'
import './card.scss'
import './map.scss'
import './contact.scss'
import banner from '../../assets/img/main.jpg'
import Cards from "../cards/cards"
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { useLanguage } from "../../context/LanguageContext"
import { useEffect, useState } from "react"
import { makeRequest } from "../../hooks/fetch.hook"
import ContactsContent from "../contacts/contactContent"
import Loader from "../loader/loader"
import { NavLink } from "react-router-dom"

function Main() {

    const [main,setMain] = useState({rutitlebanner : '',entitlebanner: '',rudescriptionbanner: '', endescriptionbanner: '', rutextgreeting: '',entextgreeting: '',rulasttext: '', enlasttext: ''})

    const {lang,toggleLanguage} = useLanguage()
    
    useEffect( () => {

            
            getdata()
    
     
    },[])
   const   getdata = async () =>{
    const data = await makeRequest('/api/main/','GET')
    setMain({rutitlebanner : data[0].rutitlebanner,entitlebanner: data[0].entitlebanner,rudescriptionbanner: data[0].rudescriptionbanner, endescriptionbanner: data[0].endescriptionbanner, rutextgreeting: data[0].rutextgreeting,entextgreeting: data[0].entextgreeting,rulasttext: data[0].rulasttext, enlasttext: data[0].enlasttext})

    }
    return (
        
       <div className="wrapper">
        {main.rutitlebanner == '' && <Loader/>}
      <Header/>


      <div className="main">
     
     <div className="main-slider">
         <div className="main__block white">
            
             <div className="main__content">
                 <img src={banner} alt="" />
                 <div className="main__text">
                     <div className="main__text-head animate"><p>{lang == 'ru' ? main.rutitlebanner : main.entitlebanner}</p></div>
                     <div className="main__text-parag"><span>{lang == 'ru' ? main.rudescriptionbanner : main.endescriptionbanner}</span></div>
                 <a href="">  <button className="main__button"> <p>{lang == 'ru' ? 'Подробнее' : 'More'}</p> <span className="line"></span></button></a>  
                 </div>
               
         </div>

        </div>
     
     

    </div>

    <div className="greeting">
        <div className="greeting__text"><p>{lang == 'ru' ? main.rutextgreeting : main.entextgreeting}</p></div>
        <div className="greeting__button">
        <NavLink to="/contacts">  <button className="black-btn"> <p>{lang == 'ru' ? 'Предложения' : 'Propose'}</p> <span className="line"></span></button></NavLink>  
        </div>
        <div className="greeting__button">
        <NavLink to="/models">   <button className="black-btn"> <p>{lang == 'ru' ? 'Автомобили в наличии' : 'Models'}</p> <span className="line"></span></button></NavLink>  
        </div>
        <div className="greeting__button ">
        <NavLink to="/testdrive">  <button className="black-btn white-btn"> <p> {lang == 'ru' ? 'Тест-драйв' : 'Test-Drive'}</p> <span className="line"></span></button></NavLink>  
        </div>
        
    </div>
    <div className="contact">
     <div className="contact__head"><h2>Наши контакты</h2></div>
     <div className="contact__line"></div>
     <div className="contact__text"><p>Уважаемые клиенты! Мы заботимся о том, чтобы атмосфера в нашем салоне была комфортной и уютной. Ожидая оформления документов на покупку или окончания регламентного ТО, вы с удовольствием проведете у нас время за чашкой ароматного кофе.</p></div>
     
     
 </div>

 <ContactsContent />
<Cards/>
<div className="propose">
 <div className="container">
 <p>{lang == 'ru' ? main.rulasttext : main.enlasttext}</p>
 </div>
</div>
 </div>     


        <Footer/>
       </div>
     
     
     
    )

}

export default Main