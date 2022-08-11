import logo from '../../assets/img/logo.png'
import './header.scss'
import call from '../../assets/img/call.svg'
import { NavLink } from 'react-router-dom'

export const Header : React.FC = () => {

    return(
        <header className="header">
        <div className="header__row">
            <div className="header__image">
                <img src={logo} alt="img" />
            </div>
            <div className="header__menu">
                <ul>
                    <li><a href="TestDrive.html">Тест-драйв</a></li>
                    <li><a href="special.html">Спецпредложения</a></li>
                    <li><a href="models.html"> Модели</a></li>
                    <li><a href="finance.html">Финансовые услуги</a></li>
                   
                </ul>
            </div>
            <div className="header__call">
                <button className="header__name"> <p>Лексус - Автодель</p>  <span className="line"></span></button>
                <button className="header__telephone"><img src={call} alt="" /></button>
                <div className="header__call-block">
                        <div className="phone-card__icon"><i className="fas fa-phone-alt"></i></div>
                        <div className="phone-card__title">Лексус - Автодель</div>
                        <div className="phone-card__phone">+7 (495)154-47-49</div>
                    
                </div>
             
       </div>
            </div>
        
           
        <div className="subheader">
            <div className="subheader__row">
            <div className="subheader__left">
<div className="subheader__name">Лексус - Автодель</div>
<ul>
<li className="subheader__active"><NavLink to="/">Главная</NavLink></li>
<li><a href="auto_have.html">Автомобили в наличии</a></li>
<li> <a href="service.html">Сервис и запасные части</a></li>
<li><NavLink to="/news">Новости</NavLink></li>
<li><a href="about.html"> О нас</a></li>
<li>Телефон диллера</li>
</ul>
            </div>
          <div className="subheader__right">+7 (978) 000-00-00</div>
            <div className="subheader__modal"><button id="modal-btn" className="subheader__modal-btn"><i className="fa fa-bars" aria-hidden="true"></i></button></div>
        </div>
        </div>

        <div className="popup">
            <div className="popup-content">
       
                <div className="content">
     
                    <ul>
                        <li >Главная</li>
                        <li>Тест-драйв</li>
                        <li>Спецпредложения</li>
                        <li>С пробегом</li>
                        <li>Финансовые услуги</li>
                        <li>Автомобили в наличии</li>
                        <li>Сервис и запасные части</li>
                        <li>Новости</li>
                        <li>О нас</li>
                        <li>Телефон диллера</li>
                    </ul>
                                 
                </div>
                <button className="popup-close">Закрытьᅠ<span>X</span> </button>
            </div>
            </div>
</header>

    )
}