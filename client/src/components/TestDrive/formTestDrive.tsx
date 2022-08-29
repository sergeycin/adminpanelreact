
import './testDrive.scss'
import './models.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ls from "../../assets/img/ls.png"
import './formTestDrive.scss'
import './form.scss'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

interface LocationState {
    state:{
        title: string,
    }
   

  }
function FormTestDrive() {
    const location = useLocation();
    const { state } = location as LocationState;
    const {lang,toggleLanguage} = useLanguage()
return(
  
<div className="wrapper">
<Header/>  




<div className="rating__header"><h2>{lang == 'ru' ? 'ЗАПИСЬ НА ТЕСТ-ДРАЙВ' : 'RECORDING FOR A TEST DRIVE'}</h2></div>
    <div className="rating__line"></div>
    <div className="testDrive__way">
        <a href="TestDrive.html">    <div className="testDrive__way-item" id="way-model" ><p>{lang == 'ru' ? 'МОДЕЛЬ' : 'MODEL'}</p> <p className="mob-way">1</p> <div className="testDrive__line line-model"></div> </div></a>
        <a id="way-contact" href="form__testDrive.html"><div className="testDrive__way-item"  ><p>{lang == 'ru' ? 'КОНТАКТНАЯ ИНФОРМАЦИЯ' : 'CONTACT INFORMATION'}</p> <p className="mob-way">2</p> <div className="testDrive__line line-model"></div> </div></a>
     <a  id="way-accept" href="#">   <div className="testDrive__way-item" id="way-model" ><p>{lang == 'ru' ? 'ПОДТВЕРЖДЕНИЕ' : 'CONFIRM'}</p> <p className="mob-way">3</p> <div className="testDrive__line line-model"></div> </div></a>  
    </div>

    <div className="choice-model">
        <div className="container">
      
                <div className="choice-model__row">
                    <div className="choice-model__text">
                        <p>{lang == 'ru' ? 'ВЫ ВЫБРАЛИ' : 'YOUR CHOICE'}</p>
                        <div  className="choice-model__text-head"><p>LEXUS {state.title}</p></div>
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
                <div className="rating__form-header"> <h4>{lang == 'ru' ? 'ВЫБЕРИТЕ ДИЛЛЕРСКИЙ ЦЕНТР' : 'CHOOSE A DEALERSHIP'}</h4></div>  
                <form >
                <div className="rating__row">
                   <div className="row">
                       <label htmlFor="text1" className="required"> {lang == 'ru' ? 'Город диллерского центра' : 'Dealership City'} <span className="required">*</span></label>                                           
                       <input disabled type="text" id="text1" value={lang == 'ru' ? 'Симферополь' : 'Simferopol'} />
                   </div>
                   <div className="row">
                       <label htmlFor="text2" className="required">{lang == 'ru' ? 'Диллерский центр' : 'The city of the dealer center'}<span className="required">*</span></label>
                       <input disabled type="text" id="text2" value={lang == 'ru' ? 'Лексус-Крым' : 'Lexus-Crime'} />
                   </div>
             
                   
               </div>
                <div className="rating__form-header"> <h4>{lang == 'ru' ? 'ВАША КОНТАКТНАЯ ИНФОРМАЦИЯ' : 'YOUR CONTACT INFORMATION'}
                </h4></div>  
    
                <div className="rating__row">
                   <div className="row">
                       <label htmlFor="text1" className="required">{lang == 'ru' ? 'ФИО' : 'FIO'}<span className="required">*</span></label>                                           
                       <input type="text" id="text1"  />
                   </div>
                
                   <div className="row">
                       <label htmlFor="text3" className="required">
                       
                       {lang == 'ru' ? 'Дата тест-драйва' : 'Date Test-Drive'}<span className="required">*</span></label>
                       <input type="text" id="text3"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text4" className="required">{lang == 'ru' ? 'Время тест-драйва' : 'Time to Test-Drive'} <span className="required">*</span></label>
                       <input type="text" id="text4"  />
                   </div>
                   
               </div>
               <div className="rating__row">
                   <div className="row">
                       <label htmlFor="text1" className="required"> {lang == 'ru' ? 'Телефон' : 'Phone'}  <span className="required">*</span></label>
                       <input type="number" id="text1"  />
                   </div>
                   <div className="row">
                       <label htmlFor="text2" className="required"> {lang == 'ru' ? 'Электронная почта' : 'EMAIL'}  <span className="required">*</span></label>
                       <input type="text" id="text2"  />
                   </div>
              
                
               </div>
         
            {/* <div className="row accept" >
              
                <input id="check" type="checkbox"/>
                <label htmlFor="#check">{lang == 'ru' ? 'Я согласен на передачу,обработку персональных данных и получение информации обо мне, а также на получение рекламно-информационных рассылок от Автодель' : 'I agree to the transfer, processing of personal data and receipt of information about me, as well as to receive promotional newsletters from Avtodel'} </label>

            </div> */}
            <div className="row buttons">
                <button className="black-btn"> <p>{lang == 'ru' ? 'Отправить' : 'Send'} </p> <span className="line"></span></button>
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