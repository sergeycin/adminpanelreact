
import './service.scss'
import './kredit.scss'
import './credit.scss'

import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ser from '../../assets/img/ser.jpg'
import coup from '../../assets/img/coup.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { NavLink } from 'react-router-dom'


function Parts() {
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
                <li>{lang == 'ru' ? 'Сервис и запсные части' : 'Service and spare parts'}</li>
           
              </ul>
            </div>
        </div>
        
    </div>
   <div className="service-kredit">
    <div className="kredit">
        <div className="kredit__block">
            <img src={coup} alt=""/>
            <div className="kredit__text">
                
                <div className="kredit__text-head "><p>{lang == 'ru' ? 'ОРИГИНАЛЬНЫЕ ЗАПАСНЫЕ ЧАСТИ LEXUS' : 'ORIGINAL LEXUS SPARE PARTS'}</p></div>
                <p>{lang == 'ru' ? 'Наши высококвалифицированные специалисты всегда работают только с оригинальными запасными частями Lexus.Именно оригинальные запасные части Lexus гарантируют наилучшую производительность автомобиля и вашу безопасность' : 'Our highly qualified specialists always work only with original Lexus spare parts.It is the original Lexus spare parts that guarantee the best performance of the car and your safety'}</p>
                <div className="kredit__btn">
                <NavLink to="/contacts">   <button className="black-btn "> <p>{lang == 'ru' ? 'Обратный звонок' : 'Callback'}</p> <span className="line"></span></button></NavLink>  
                </div>
            </div>
        </div>
    </div>


<Footer/>
    </div>
    </div>

    )
}

export default Parts