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
            <li><NavLink to="/testdrive">{lang == 'ru' ? 'Тест-драйв' : 'Test-Drive'}</NavLink></li>
    <li><NavLink className="submenu-link" to="/autoservice">{lang == 'ru' ? 'Сервис' : 'Service'}</NavLink>
          <ul className="submenu">
          <li><NavLink to="/autoservice">{lang == 'ru' ? 'Автосервис' : 'AutoService'}</NavLink></li>
          <li><NavLink to="/parts">{lang == 'ru' ? 'Запчасти' : 'Spare parts'}</NavLink></li>
          <li><NavLink to="/service">{lang == 'ru' ? 'Обслуживание' : 'Service'}</NavLink></li>
          </ul>
        </li>
        <li><NavLink className="submenu-link" to="/history">{lang == 'ru' ? 'История компании' : 'History Company'}</NavLink>
          <ul className="submenu">
          <li><NavLink to="/autosalon">{lang == 'ru' ? 'Об автосалоне' : 'About Autosalon'}</NavLink></li>
          <li><NavLink to="/history">{lang == 'ru' ? 'О марке авто' : 'About Mark Aout'}</NavLink></li>
           
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
                <button className="header__name"> <p>{lang == 'ru' ? 'Лексус-Крым' : 'Lexus-Crime'}</p>  <span className="line"></span></button>
                <button className="header__telephone"><img src={call} alt="" /></button>
                <div className="header__call-block">
                        <div className="phone-card__icon"><i className="fas fa-phone-alt"></i></div>
                        <div className="phone-card__title">{lang == 'ru' ? 'Лексус-Крым' : 'Lexus-Crime'}</div>
                        <div className="phone-card__phone">+7 (495)154-47-49</div>
                    
                </div>
             
       </div>
            </div>
        
           
        <div className="subheader">
            <div className="subheader__row">
            <div className="subheader__left">
<div className="subheader__name">{lang == 'ru' ? 'Лексус-Крым' : 'Lexus-Crime'}</div>
<ul>
<li ><NavLink to="/">{lang == 'ru' ? 'Главная' : 'Main'}</NavLink></li>
<li><NavLink to="/models">{lang == 'ru' ? 'Авто в наличии' : 'Cars in stock'}</NavLink></li>
<li><NavLink to="/news">{lang == 'ru' ? 'Новости' : 'News'}</NavLink></li>

<li><NavLink to="/contacts">{lang == 'ru' ? 'Контакты' : 'Contact'}</NavLink></li>
</ul>
<div className="dropdown">
  <div className="dropbtn">{lang}</div>
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