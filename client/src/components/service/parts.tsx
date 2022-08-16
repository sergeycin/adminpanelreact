
import './service.scss'
import './kredit.scss'
import './credit.scss'

import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ser from '../../assets/img/ser.jpg'
import coup from '../../assets/img/coup.jpg'


function Parts() {
return(
  
<div className="wrapper">
<Header/>  
<div className="auto_have">
      
      <div className="news">
          <div className="news__image">   <img src={ser} alt=""/></div>
          <div className="news__text">
              <div  className="news__text-head"><p>Сервис  </p></div>
            
          </div>
          <div className="news__text-parag"><p>Сосредоточьтесь на главном удовольствии от вождения.А мы позаботимся об обслуживании вашего автомобиля Lexus</p>
          </div>
      </div>
  </div>

    <div className="bread-block">
        <div className="bread">
            <div className="container">
            <ul className="breadcrumb">
                <li><a href="#">Главная</a></li>
                <li>Сервис и запасные части</li>
           
              </ul>
            </div>
        </div>
        
    </div>
   <div className="service-kredit">
    <div className="kredit">
        <div className="kredit__block">
            <img src={coup} alt=""/>
            <div className="kredit__text">
                
                <div className="kredit__text-head "><p>ОРИГИНАЛЬНЫЕ ЗАПАСНЫЕ ЧАСТИ LEXUS</p></div>
                <p>Наши высококвалифицированные специалисты всегда работают только с оригинальными запасными частями Lexus.Именно оригинальные запасные части Lexus гарантируют наилучшую производительность автомобиля и вашу безопасность</p>
                <div className="kredit__btn">
                    <a href="">  <button className="black-btn "> <p>Обратный звонок</p> <span className="line"></span></button></a>  
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