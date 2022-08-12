import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import '../service/kredit.scss'
import '../service/credit.scss'

import coup from '../../assets/img/coup.jpg'
import tex from '../../assets/img/tex.jpg'
import ser from '../../assets/img/ser.jpg'
import Cards from "../cards/cards"

function History() {
    return(
      
    <div className="wrapper">
    <Header/>  
    <div className="auto_have">
      
      <div className="news">
          <div className="news__image">   <img src={ser} alt=""/></div>
          <div className="news__text">
              <div  className="news__text-head"><p>История компании  </p></div>
            
          </div>
          <div className="news__text-parag"><p>Погрузитесь в мир всемирной марки Lexus</p>
          </div>
      </div>
  </div>
    <div className="service-kredit">
    <div className="kredit">
        <div className="kredit__block">
            <img src={coup} alt=""/>
            <div className="kredit__text">
                
                <div className="kredit__text-head "><p>Автосалон Lexus</p></div>
                <p>Наш автосалон существует уже более 10 лет и отзывы клиентов показывают качество наших автомобилей а так же удоство обслуживания</p>
                <div className="kredit__btn">
                    <a href="">  <button className="black-btn "> <p>Обратный звонок</p> <span className="line"></span></button></a>  
                </div>
            </div>
        </div>
    </div>
 </div>

 <div className="service">
   

   <div className="credit">
       <div className="credit__block">
           <img src={tex} alt=""/>
           <div className="credit__text">
        

               <div className="credit__text-head "><p>Lexus - гарант качества</p></div>
               <p>Lexus - всемирно известный бренд автомобилей показавший свою надежность и качество автомобилей</p>
               <div className="credit__btn">
                   <a href="">  <button className="black-btn"> <p>Записаться</p> <span className="line"></span></button></a>  
               </div>
           </div>
   
          
       </div>
   </div>
   
</div>
<Cards/>
    <Footer/>
    </div>
  

    )
}

export default History