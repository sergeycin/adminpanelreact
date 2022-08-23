import logo from '../../assets/img/logo.png'
import './header.scss'
import call from '../../assets/img/call.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'


export const Header : React.FC = () => {
    const [currentLanguage,setLanguage]= useState<string>('ru')
    const {lang,toggleLanguage} = useLanguage()
    const changeLanguage = (event:any) =>{
        event.preventDefault()
     
        setLanguage(event.target.innerHTML)
        toggleLanguage(event.target.innerHTML)
        // lang.language = event.target.innerHTML
        // console.log(lang.language)
    }
    return(
        <header className="header">
        <div className="header__row">
            <div className="header__image">
                <img src={logo} alt="img" />
            </div>
            <div className="header__menu">
            <nav>
            <ul className="topmenu">
            <li><NavLink to="/testdrive">Тест Драйв</NavLink></li>
    <li><NavLink className="submenu-link" to="/autoservice">Cервис</NavLink>
          <ul className="submenu">
          <li><NavLink to="/autoservice">Автосервис</NavLink></li>
          <li><NavLink to="/parts">Запчасти</NavLink></li>
          <li><NavLink to="/service">Обслуживание</NavLink></li>
          </ul>
        </li>
        <li><NavLink className="submenu-link" to="/history">История компании</NavLink>
          <ul className="submenu">
          <li><NavLink to="/autosalon">Об автосалоне</NavLink></li>
          <li><NavLink to="/history">Об марке авто</NavLink></li>
           
          </ul>
        </li>

  
      </ul>
      </nav>
          {/* <ul>
                <li><NavLink to="/testdrive">Тест Драйв</NavLink></li>
                <li><NavLink to="/service">Cервис</NavLink></li>
                    <li><NavLink to="/history">История компании</NavLink></li>
                   
                </ul> */}
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
<li ><NavLink to="/">Главная</NavLink></li>
<li><NavLink to="/models">Автомобили в наличии</NavLink></li>
<li><NavLink to="/news">Новости</NavLink></li>

<li><NavLink to="/contacts">Контакты</NavLink></li>
</ul>
<div className="dropdown">
  <div className="dropbtn">{currentLanguage}</div>
  <div className="dropdown-content" onClick={(event) => changeLanguage(event)}>
  <a href="#">en</a>
    <a href="#">ru</a>
 
  </div>
</div>
          
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