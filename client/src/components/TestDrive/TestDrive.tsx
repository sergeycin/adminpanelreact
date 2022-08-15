
import './testDrive.scss'
import './models.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ls from "../../assets/img/ls.png"
import { NavLink } from 'react-router-dom'

function TestDrive() {
return(
  
<div className="wrapper">
<Header/>  

<div className="testDrive">
        <div className="rating__header"><h2>ЗАПИСЬ НА ТЕСТ-ДРАЙВ</h2></div>
        <div className="rating__line"></div>
        <div className="testDrive__way">
            <a href="TestDrive.html">    <div className="testDrive__way-item" id="way-model" ><p>МОДЕЛЬ</p> <p className="mob-way">1</p> <div className="testDrive__line line-model"></div> </div></a>
          <a id="way-contact" href="form__testDrive.html"><div className="testDrive__way-item"  ><p>КОНТАКТНАЯ ИНФОРМАЦИЯ</p> <p className="mob-way">2</p> <div className="testDrive__line line-model"></div> </div></a>
       <a  id="way-accept" href="#">   <div className="testDrive__way-item" id="way-model" ><p>ПОДТВЕРЖДЕНИЕ</p> <p className="mob-way">3</p> <div className="testDrive__line line-model"></div> </div></a>  
        </div>
<div className="container">
    <div className="testDrive__models">
        <div className="models__wrap">
            <div className="models__row">
         <div className="models__item" >
     
                    <h2>UX</h2>
                    <p>Встречай рассвет в движении</p>
                    <div className="models__image"><img src={ls} alt=""/></div>
           
                <div className="testDrive__neither">
              
                    <div className="testDrive__models-btn">
                        <a className="a-accept" href="form__testDrive.html">  <button className="black-btn white-btn"> <p>Выбрать</p> <span className="line"></span></button></a>  
                    </div>
                </div>
            
                </div>
                <div className="models__item" >
                    <NavLink to="/UX">   
                            <h2>UX</h2>
                            <p>Встречай рассвет в движении</p>
                            <div className="models__image"><img src={ls} alt=""/></div>
                        </NavLink>  
                        <div className="testDrive__neither">
                     
                            <div className="testDrive__models-btn">
                            <NavLink to="UX">   <button className="black-btn white-btn"> <p>Заказать</p> <span className="line"></span></button>  </NavLink>  
                            </div>
                        </div>
                    
                        </div>
                        <div className="models__item" >
                            <a href="model_single.html">   
                                    <h2>UX</h2>
                                    <p>Встречай рассвет в движении</p>
                                    <div className="models__image"><img src={ls} alt=""/></div>
                                </a>  
                                <div className="testDrive__neither">
                                  
                                    <div className="testDrive__models-btn">
                                        <a href="">  <button className="black-btn white-btn"> <p>Заказать</p> <span className="line"></span></button></a>  
                                    </div>
                                </div>
                            
                                </div>
                                <div className="models__item" >
                                    <a href="model_single.html">   
                                            <h2>UX</h2>
                                            <p>Встречай рассвет в движении</p>
                                            <div className="models__image"><img src={ls} alt=""/></div>
                                        </a>  
                                        <div className="testDrive__neither">
                                          
                                            <div className="testDrive__models-btn">
                                                <a href="">  <button className="black-btn white-btn"> <p>Заказать</p> <span className="line"></span></button></a>  
                                            </div>
                                        </div>
                                    
                                        </div>
                                        <div className="models__item" >
                                            <a href="model_single.html">   
                                                    <h2>UX</h2>
                                                    <p>Встречай рассвет в движении</p>
                                                    <div className="models__image"><img src={ls} alt=""/></div>
                                                </a>  
                                                <div className="testDrive__neither">
                                                  
                                                    <div className="testDrive__models-btn">
                                                        <a href="">  <button className="black-btn white-btn"> <p>Заказать</p> <span className="line"></span></button></a>  
                                                    </div>
                                                </div>
                                            
                                                </div>
                                                <div className="models__item" >
                                                    <a href="model_single.html">   
                                                            <h2>UX</h2>
                                                            <p>Встречай рассвет в движении</p>
                                                            <div className="models__image"><img src={ls} alt=""/></div>
                                                        </a>  
                                                        <div className="testDrive__neither">
                                                    
                                                            <div className="testDrive__models-btn">
                                                                <a href="">  <button className="black-btn white-btn"> <p>Заказать</p> <span className="line"></span></button></a>  
                                                            </div>
                                                        </div>
                                                    
                                                        </div>
              
            </div>
        </div>
    </div>
 
</div>
       
    </div>

<Footer/>
    </div>

    )
}

export default TestDrive