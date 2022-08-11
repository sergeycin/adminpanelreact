import card1 from '../../assets/img/card1.jpg'
import card2 from '../../assets/img/card2.jpg'
import card3 from '../../assets/img/card3.jpg'
function Cards() {


    return (
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
)

}

export default Cards