import { useLanguage } from '../../context/LanguageContext'
import './footer.scss'


export const Footer : React.FC = () => {
    const {lang,toggleLanguage} = useLanguage()
    return(
        
    <footer className="footer">
    <div className="container">
        <div className="footer__row">
            <div className="footer__models">
                <h2>{lang == 'ru' ? 'Модели' : 'Models'}</h2>
                <li>{lang == 'ru' ? 'Авто в наличии' : 'Cars in stock'}</li>
            
           
                
            </div>
            <div className="footer_buyers">
                <h3>{lang == 'ru' ? 'Покупателям' : 'Clients'}</h3>
  
                <li>{lang == 'ru' ? 'Контакты' : 'Contacts'}</li>
              
            </div>
            
            <div className="footer__owners">
                <h2>{lang == 'ru' ? 'Тест-драйв' : 'Test-Drive'} </h2>
                <li>{lang == 'ru' ? 'Перейти к тест-драйву' : 'Go to the test drive'}</li>
          
            </div>
            <div className="footer__social">
            <a href="">  <i className="fab fa-instagram"></i></a>  
            <a href="">   <i className="fab fa-facebook-f"></i></a>  
                <a href="">  <i className="fab fa-vk"></i></a>  
            </div>
        </div>
        <div className="footer__mobile">
            <div className="footer__social">
                <a href="">  <i className="fab fa-instagram"></i></a>  
                <a href="">   <i className="fab fa-facebook-f"></i></a>  
                    <a href="">  <i className="fab fa-vk"></i></a>  
                </div>
            <div className="footer__mobile-item">
            <ul>
                <li>
                    <h3 id="mobile_btn">Модели</h3>
                    <ul className="footer__mobile-li">
                        <li>UX</li>
                        <li>NX</li>
                        <li>RX</li>
                        <li>RXL</li>
                        <li>GX</li>
                        <li>LX</li>
                        <li>ES</li>
                        <li>LS</li>
                        <li>LC</li>
                        <li>Концепт-кадры</li>
                        <li>Новый Lezus NX</li>
                    </ul>
                </li>
            </ul> 
            
        </div>
        <div className="footer__mobile-item">
            <ul>
                <li>
                    <h3 id="mobile_btn">Покупателям</h3>
                    <ul className="footer__mobile-li">
                        <li>Автомобили в наличии</li>
                        <li>АОнлайн-одобрение кредита</li>
                        <li>Обратный звонок</li>
                        <li>Консультация по лизингу</li>
                        <li>Оценка вашего автомобиля</li>
                        <li>Автомобили с пробегом</li>
                        <li>Финансовые услуги</li>
                        <li>Клиентская поддержка</li>
                    </ul>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className="footer__mobile-item">
            <ul>
                <li>
                    <h3 id="mobile_btn">Владельцам</h3>
                    <ul className="footer__mobile-li">
                        <li>Запись на ТО</li>
                        <li>Спецпредложения</li>
                        <li>Сервисы Lezus</li>
                        <li>Руководства</li>
                    </ul>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
        </div>
        <div className="footer__next">
            <div className="footer__next-row">
            
            <p>©2021 Лексус - Автодель</p>
        </div>
        </div>
    </div>
</footer>
    )
}