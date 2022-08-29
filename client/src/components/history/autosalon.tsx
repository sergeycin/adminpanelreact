import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import '../service/kredit.scss'
import '../service/credit.scss'

import coup from '../../assets/img/coup.jpg'
import ser from '../../assets/img/ser.jpg'
import Cards from "../cards/cards"
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { useLanguage } from "../../context/LanguageContext"
import { useEffect } from "react"
import { getAboutAutoSalon } from "../../store/actions/historyActions"

function AutoSalon() {
    const dispatch = useAppDispatch()
    const {error,loading,autosalon} = UseAppSelector(state => state.historySlice)
    const {lang,toggleLanguage} = useLanguage()

    useEffect(()=>{
        dispatch(getAboutAutoSalon())
    })
    return(
      
    <div className="wrapper">
    <Header/>  
    <div className="auto_have">
      
      <div className="news">
          <div className="news__image">   <img src={ser} alt=""/></div>
          <div className="news__text">
              <div  className="news__text-head"><p>История компании  </p></div>
            
          </div>
          <div className="news__text-parag"><p>Погрузитесь в мир всемирной марки Lexus</p>
          </div>
      </div>
  </div>
  {autosalon.length ? autosalon.map((item) =>       <div className="service-kredit">
    <div className="kredit">
        <div className="kredit__block">
            <img src={coup} alt=""/>
            <div className="kredit__text">
                
                <div className="kredit__text-head "><p>{lang == 'ru' ? item.rutitle : item.entitle}</p></div>
                <p>{lang == 'ru' ? item.rudescription : item.endescription}</p>
                <div className="kredit__btn">
                    <a href="">  <button className="black-btn "> <p>Обратный звонок</p> <span className="line"></span></button></a>  
                </div>
            </div>
        </div>
    </div>
 </div>) : ''}
   


<Cards/>
    <Footer/>
    </div>
  

    )
}

export default AutoSalon