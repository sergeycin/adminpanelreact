
import './testDrive.scss'
import './models.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ls from "../../assets/img/ls.png"
import { NavLink } from 'react-router-dom'
import { useAppDispatch, UseAppSelector } from '../../hooks/redux'
import { useLanguage } from '../../context/LanguageContext'
import { useEffect } from 'react'
import { getModels } from '../../store/actions/modelsAction'
import Loader from '../loader/loader'

function TestDrive() {
    const dispatch = useAppDispatch()
    const {lang,toggleLanguage} = useLanguage()
    const {error,loading,models} = UseAppSelector(state => state.modelsSlice)
    useEffect(()=>{
        dispatch(getModels())
    },[])
return(
  
<div className="wrapper">
<Header/>  
{loading && <Loader/>}
<div className="testDrive">
        <div className="rating__header"><h2>{lang == 'ru' ? 'ЗАПИСЬ НА ТЕСТ-ДРАЙВ' : 'RECORDING FOR A TEST DRIVE'}</h2></div>
        <div className="rating__line"></div>
        <div className="testDrive__way">
        <a href="TestDrive.html">    <div className="testDrive__way-item" id="way-model" ><p>{lang == 'ru' ? 'МОДЕЛЬ' : 'MODEL'}</p> <p className="mob-way">1</p> <div className="testDrive__line line-model"></div> </div></a>
        <a id="way-contact" href="form__testDrive.html"><div className="testDrive__way-item"  ><p>{lang == 'ru' ? 'КОНТАКТНАЯ ИНФОРМАЦИЯ' : 'CONTACT INFORMATION'}</p> <p className="mob-way">2</p> <div className="testDrive__line line-model"></div> </div></a>
     <a  id="way-accept" href="#">   <div className="testDrive__way-item" id="way-model" ><p>{lang == 'ru' ? 'ПОДТВЕРЖДЕНИЕ' : 'CONFIRM'}</p> <p className="mob-way">3</p> <div className="testDrive__line line-model"></div> </div></a>  
        </div>
<div className="container">
    <div className="testDrive__models">
        <div className="models__wrap">
            <div className="models__row">
            {models.length ? models.map((item) =><div className="models__item" >
  
  <h2>{item.title}</h2>
  <p>{lang == 'ru' ? item.rudescription : item.endescription}</p>
  <div className="models__image"><img src={item.image} alt=""/></div>
  <div className="testDrive__neither">
              
              <div className="testDrive__models-btn">
                  <NavLink state={{title: item.title}} className="a-accept" to={item.title}>  <button className="black-btn white-btn"> <p>Выбрать</p> <span className="line"></span></button></NavLink>  
              </div>
          </div>
</div>) : ''}
       
              
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