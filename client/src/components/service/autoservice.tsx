
import './service.scss'
import './kredit.scss'
import './credit.scss'

import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import maslo from '../../assets/img/maslo.jpg'
import ser from '../../assets/img/ser.jpg'
function AutoService() {
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

    <div className="stocks">
        <div className="container">
            <div className="stocks__row">
                <div className="stocks__text">
                  
                    <div className="stocks__text-head "><p>Автосервис</p></div>
                   <p>В официальном сервисном центре Lexus вас ждут выгодные условия и специальные предложения на услуги сервиса.Наша цель-сделать каждое посещение комфортным и выгодным для вас</p>
                    <div className="stocks__btn">
                        <a href="">  <button className="black-btn"> <p>Предложения</p> <span className="line"></span></button></a>  
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