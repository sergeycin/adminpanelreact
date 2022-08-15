
import './testDrive.scss'
import './models.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ls from "../../assets/img/ls.png"
import './formTestDrive.scss'
import './form.scss'

function FormTestDrive() {
return(
  
<div className="wrapper">
<Header/>  




<div className="rating__header"><h2>ЗАПИСЬ НА ТЕСТ-ДРАЙВ</h2></div>
    <div className="rating__line"></div>
    <div className="testDrive__way">
        <a href="TestDrive.html">    <div className="testDrive__way-item" id="way-model" ><p>МОДЕЛЬ</p> <p className="mob-way">1</p> <div className="testDrive__line line-model"></div> </div></a>
        <a id="way-contact" href="form__testDrive.html"><div className="testDrive__way-item"  ><p>КОНТАКТНАЯ ИНФОРМАЦИЯ</p> <p className="mob-way">2</p> <div className="testDrive__line line-model"></div> </div></a>
     <a  id="way-accept" href="#">   <div className="testDrive__way-item" id="way-model" ><p>ПОДТВЕРЖДЕНИЕ</p> <p className="mob-way">3</p> <div className="testDrive__line line-model"></div> </div></a>  
    </div>

    <div className="choice-model">
        <div className="container">
      
                <div className="choice-model__row">
                    <div className="choice-model__text">
                        <p>ВЫ ВЫБРАЛИ</p>
                        <div  className="choice-model__text-head"><p>NEW LEXUS LS</p></div>
                    </div>
                    <div className="choice-model__image">
                        <img src={ls} alt=""/>
                    </div>
    
                </div>
     
         
    

        </div>

    </div>
    <div className="formDrive">
        <div className="container">
            <div className="rating">
                <div className="rating__form-header"> <h4>ВЫБЕРИТЕ ДИЛЕРСКИЙ ЦЕНТР</h4></div>  
                <form >
                <div className="rating__row">
                   <div className="row">
                       <label htmlFor="text1" className="required"> Город  дилерского центра <span className="required">*</span></label>                                           
                       <input disabled type="text" id="text1" value="Cимферополь" />
                   </div>
                   <div className="row">
                       <label htmlFor="text2" className="required">Дилерский центр<span className="required">*</span></label>
                       <input disabled type="text" id="text2" value="Лексус-Автодель" />
                   </div>
             
                   
               </div>
                <div className="rating__form-header"> <h4>ВАША КОНТАКТНАЯ ИНФОРМАЦИЯ
                </h4></div>  
    
                <div className="rating__row">
                   <div className="row">
                       <label htmlFor="text1" className="required"> Имя<span className="required">*</span></label>                                           
                       <input type="text" id="text1"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text2" className="required">
                        Фамилия<span className="required">*</span></label>
                       <input type="number" id="text2"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text3" className="required">
                       
Дата рождения<span className="required">*</span></label>
                       <input type="text" id="text3"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text4" className="required">Пол <span className="required">*</span></label>
                       <input type="text" id="text4"  />
                   </div>
                   
               </div>
               <div className="rating__row">
                   <div className="row">
                       <label htmlFor="text1" className="required"> Телефон <span className="required">*</span></label>
                       <input type="text" id="text1"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text2" className="required">Электронная почта<span className="required">*</span></label>
                       <input type="number" id="text2"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text3" className="required">
                        Желаемое время для связи<span className="required">*</span></label>
                       <input type="text" id="text3"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text3" className="required">Удобный способ связи<span className="required">*</span></label>
                       <input type="text" id="text3"  />
                   </div>
               </div>
         
            <div className="row accept" >
              
                <input id="check" type="checkbox"/>
                <label htmlFor="#check">Я согласен на передачу,обработку персональных данных и получение информации обо мне, а также на получение рекламно-информационных рассылок от Автодель</label>

            </div>
            <div className="row buttons">
                <button className="black-btn"> <p>Отправить</p> <span className="line"></span></button>
                  </div>
        </form>
            </div>
        </div>
        

</div>

<Footer/>
    </div>

    )
}

export default FormTestDrive