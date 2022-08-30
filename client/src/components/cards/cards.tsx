import { NavLink } from 'react-router-dom'
import card1 from '../../assets/img/card1.jpg'
import card2 from '../../assets/img/card2.jpg'
import card3 from '../../assets/img/card3.jpg'
import { useLanguage } from '../../context/LanguageContext'
function Cards() {
    const {lang,toggleLanguage} = useLanguage()

    return (
        <div className="card">
        <div className="container">
    <div className="card__row">
       
            <div className="card__item">
          
                <img src={card1} alt=""/>
                <div className="card__item-block">
                   
                    <div className="card__text-head"><p>{lang == 'ru' ? 'Онлайн - Оценка' : 'Online-estimation'}</p></div>
                    <div className="card__button ">
                        <NavLink to="contacts">  <button className="black-btn black-background"> <p>{lang == 'ru' ? 'Предложения' : 'Propose'}</p> <span className="line"></span></button></NavLink>  
                       </div>
                  
                </div>
            </div>
            <div className="card__item">
           
                <img src={card2}  alt=""/>
                <div className="card__item-block">
                    <div className="card__text-head"><p>{lang == 'ru' ? 'Больше о нас' : 'More about us'}</p></div>
                    <div className="card__button ">
                    <NavLink to="contacts">  <button className="black-btn black-background"> <p>{lang == 'ru' ? 'Подробнее' : 'More'}</p> <span className="line"></span></button></NavLink>  
                       </div>
                
                </div>
            </div>
            <div className="card__item">
           
                <img src={card3}  alt=""/>
                <div className="card__item-block">
                    <div className="card__text-head"><p>{lang == 'ru' ? 'Позвонить нам' : 'Call us'}</p></div>
                    <div className="card__button ">
                    <NavLink to="contacts">  <button className="black-btn black-background"> <p>{lang == 'ru' ? 'Подробнее' : 'More'}</p> <span className="line"></span></button></NavLink>  
                       </div>
                
                </div>
            </div>
        </div>
    </div>
    </div>
)

}

export default Cards