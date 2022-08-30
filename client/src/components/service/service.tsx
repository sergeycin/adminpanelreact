
import './service.scss'
import './kredit.scss'
import './credit.scss'

import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import maslo from '../../assets/img/maslo.jpg'
import coup from '../../assets/img/coup.jpg'
import tex from '../../assets/img/tex.jpg'
import ser from '../../assets/img/ser.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { NavLink } from 'react-router-dom'
function Service() {
    const {lang,toggleLanguage} = useLanguage()
return(
  
<div className="wrapper">
<Header/>  

{/* <div className="container">
   
    </div> */}
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
                <li>{lang == 'ru' ? 'Обслуживание' : 'Service'}</li>
           
              </ul>
            </div>
        </div>
        
    </div>

    <div className="stocks">
       
 <div className="service">
   

    <div className="credit">
        <div className="credit__block">
            <img src={tex} alt=""/>
            <div className="credit__text">
         

                <div className="credit__text-head "><p>{lang == 'ru' ? 'ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ' : 'MAINTENANCE'}</p></div>
                <p>{lang == 'ru' ? 'Регулярное техническое обслуживание - гарантия надежности вашего Lexus на протяжении всего срока эксплуатации' : 'Regular maintenance is a guarantee of the reliability of your Lexus throughout its entire service life'}</p>
                <div className="credit__btn">
                <NavLink to="/contacts">   <button className="black-btn "> <p>{lang == 'ru' ? 'Обратный звонок' : 'Callback'}</p> <span className="line"></span></button></NavLink> 
                </div>
            </div>
    
           
        </div>
    </div>
    
</div>

<Footer/>
    </div>
    </div>

    )
}

export default Service