
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import './main.scss'
import './greeting.scss'
import './card.scss'
import './map.scss'
import './contact.scss'
import banner from '../../assets/img/main.jpg'
import card1 from '../../assets/img/card1.jpg'
import card2 from '../../assets/img/card2.jpg'
import card3 from '../../assets/img/card3.jpg'
function Main() {


    return (
       <div className="wrapper">
      <Header/>


      <div className="main">
     
     <div className="main-slider">
         <div className="main__block white">
            
             <div className="main__content">
                 <img src={banner} alt="" />
                 <div className="main__text">
                     <div className="main__text-head animate"><p>новый lexus nx</p></div>
                     <div className="main__text-parag"><span>УБЕДИТ СИЛЬНЕЙШИХ</span></div>
                 <a href="">  <button className="main__button"> <p>ПОДРОБНЕЕ</p> <span className="line"></span></button></a>  
                 </div>
               
         </div>

        </div>
     
     

    </div>

    <div className="greeting">
        <div className="greeting__text"><p>Рады видеть вас в Лексус - Автодель – официальном дилерском центре легендарной марки Lexus. Оцените настоящее японское качество стандартов продажи и обслуживания Toyota Motor!</p></div>
        <div className="greeting__button">
         <a href="">  <button className="black-btn"> <p>Предложения</p> <span className="line"></span></button></a>  
        </div>
        <div className="greeting__button">
         <a href="">  <button className="black-btn"> <p>Автомобили в наличии</p> <span className="line"></span></button></a>  
        </div>
        <div className="greeting__button ">
         <a href="form.html">  <button className="black-btn white-btn"> <p> Тест-Драйв</p> <span className="line"></span></button></a>  
        </div>
        
    </div>
    <div className="contact">
     <div className="contact__head"><h2>Наши контакты</h2></div>
     <div className="contact__line"></div>
     <div className="contact__text"><p>Уважаемые клиенты! Мы заботимся о том, чтобы атмосфера в нашем салоне была комфортной и уютной. Ожидая оформления документов на покупку или окончания регламентного ТО, вы с удовольствием проведете у нас время за чашкой ароматного кофе.</p></div>
     
     
 </div>

 <div className="map">
     <div className="container">
         <div className="map__row">
             <div className="map__text">
                 <div className="map__text-head"><p>Лексус - Автодель</p></div>
             <div className="map__graduate">
               <a href="#"> <img src="img/graduate.jpg" alt=""/></a> 
                 <p>Лучший дилер в номинации <br/>«Рекомендация клиентов»  по итогам 2014 года</p>
             </div>
             <div className="map__contact">
                 <p><i className="fas fa-map-marker-alt"></i>
                     Киевская ул., 187, Симферополь, Россия</p>
                     <p><i className="fas fa-mobile-alt"></i>
                         +7 (495)154-47-49</p>
                         <p><i className="far fa-envelope"></i>
                             cralezus-i.ru</p>
                             <p><i className="fas fa-desktop"></i>
                                 https://lex us-i.ru</p>
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

 <div className="card">
     <div className="container">
 <div className="card__row">
    
         <div className="card__item">
       
             <img src={card1} alt=""/>
             <div className="card__item-block">
                
                 <div className="card__text-head"><p>Онлайн - Оценка</p></div>
                 <div className="card__button ">
                     <a href="form_rating.html">  <button className="black-btn black-background"> <p>Предложения</p> <span className="line"></span></button></a>  
                    </div>
               
             </div>
         </div>
         <div className="card__item">
        
             <img src={card2}  alt=""/>
             <div className="card__item-block">
                 <div className="card__text-head"><p>Кредитный калькулятор</p></div>
                 <div className="card__button ">
                     <a href="">  <button className="black-btn black-background"> <p>Рассчитать</p> <span className="line"></span></button></a>  
                    </div>
             
             </div>
         </div>
         <div className="card__item">
        
             <img src={card3}  alt=""/>
             <div className="card__item-block">
                 <div className="card__text-head"><p>Обратный звонок</p></div>
                 <div className="card__button ">
                     <a href="">  <button className="black-btn black-background"> <p>Заказать</p> <span className="line"></span></button></a>  
                    </div>
             
             </div>
         </div>
     </div>
 </div>
 </div>
<div className="propose">
 <div className="container">
 <p>Официальный дилерский центр Lexus предлагает широкий ассортимент новых автомобилей и с пробегом. Надежный японский автопром долгое время выпускает самые комфортные, безопасные, функциональные и динамичные автомобили в мире. В Лексусах покупателей привлекают инновационные технические решения, роскошный дизайн интерьера, мощность двигателей и стильный экстерьер.
<br/>
<br/>
     В нашем салоне вы можете взять любой понравившейся автомобиль Lexus для тест-драйва, и оценить все его преимущества. Вы можете прокатиться на седанах, купе, кроссоверах и спортивных моделях, имеющихся в наличии. Если же в салоне нужной комплектации нет, то она будет доставлена от производителя в кратчайшие сроки. По техническим и эксплуатационным характеристикам вас проконсультируют сотрудники дилерского центра. У нас регулярно проходят
     акции, благодаря которым автомобиль можно приобрести по особенно выгодным ценам. Помимо продажи автомобилей Lexus, наш центр предлагает воспользоваться сервисными услугами. Высококвалифицированные специалисты поставят оригинальное дополнительное оборудование, сделав ваш Лексус более функциональным и удобным.
     <br/>

     <br/>
     Возможно приобретение автомобиля в кредит или в лизинг на самых выгодных условиях. Сразу же после покупки вы можете застраховать транспортное средство. В нашем дилерском центре вы можете пройти техническое обслуживание, включая кузовной ремонт и компьютерную диагностику.</p>
 </div>
</div>
 </div>     


        <Footer/>
       </div>
     
     
     
    )

}

export default Main