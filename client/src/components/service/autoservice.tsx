
import './service.scss'
import './kredit.scss'
import './credit.scss'

import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import maslo from '../../assets/img/maslo.jpg'
import ser from '../../assets/img/ser.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { NavLink } from 'react-router-dom'
function AutoService() {
    const {lang,toggleLanguage} = useLanguage()
return(
  
<div className="wrapper">
<Header/>  

     <div className="auto_have">
      
      <div className="news">
          <div className="news__image">   <img src={ser} alt=""/></div>
          <div className="news__text">
              <div  className="news__text-head"><p>{lang == 'ru' ? 'Сервис' : 'Service'}</p></div>
            
          </div>
          <div className="news__text-parag"><p>{lang == 'ru' ? 'Сосредоточьтесь на главном удовольствии от вождения.А мы позаботимся об обслуживании вашего автомобиля Lexus' : 'Focus on the main pleasure of driving.And we will take care of the maintenance of your Lexus car'}</p>
          </div>
      </div>
  </div>

    <div className="bread-block">
        <div className="bread">
            <div className="container">
            <ul className="breadcrumb">
                <li><a href="#">{lang == 'ru' ? 'Главная' : 'Main'}</a></li>
                <li>{lang == 'ru' ? 'Автосервис' : 'AutoService'}</li>
           
              </ul>
            </div>
        </div>
        
    </div>

    <div className="stocks">
        <div className="container">
            <div className="stocks__row">
                <div className="stocks__text">
                  
                    <div className="stocks__text-head "><p>{lang == 'ru' ? 'Автосервис' : 'AutoService'}</p></div>
                   <p>{lang == 'ru' ? 'В официальном сервисном центре Lexus вас ждут выгодные условия и специальные предложения на услуги сервиса.Наша цель-сделать каждое посещение комфортным и выгодным для вас' : 'In the official Lexus service center, favorable conditions and special offers for service services are waiting for you.Our goal is to make every visit comfortable and profitable for you'}</p>
                    <div className="stocks__btn">
                        <NavLink to="/contacts">  <button className="black-btn"> <p>{lang == 'ru' ? 'Предложения' : 'Propose'}</p> <span className="line"></span></button></NavLink>  
                    </div>
            </div>
            <div className="stocks__image">
                <img src={maslo} alt=""/>
            </div>
        </div>
        </div>

 <div className="service">
   

   
    
</div>

<Footer/>
    </div>
    </div>

    )
}

export default AutoService