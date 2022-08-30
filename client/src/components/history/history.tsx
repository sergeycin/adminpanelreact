import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import '../service/kredit.scss'
import '../service/credit.scss'

import coup from '../../assets/img/coup.jpg'
import tex from '../../assets/img/tex.jpg'
import ser from '../../assets/img/ser.jpg'
import Cards from "../cards/cards"
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { useLanguage } from "../../context/LanguageContext"
import { getAboutMark } from "../../store/actions/historyActions"
import { useEffect } from "react"
import Loader from "../loader/loader"
import { NavLink } from "react-router-dom"

function History() {
    const dispatch = useAppDispatch()
    const {error,loading,automark} = UseAppSelector(state => state.historySlice)
    const {lang,toggleLanguage} = useLanguage()
    useEffect(()=>{
        dispatch(getAboutMark())
    },[])
   
    return(
      
    <div className="wrapper">
    <Header/>  
    {loading && <Loader/>}
    <div className="auto_have">
      
      <div className="news">
          <div className="news__image">   <img src={ser} alt=""/></div>
          <div className="news__text">
              <div  className="news__text-head"><p>{lang == 'ru' ? 'О марке авто' : 'About Mark auto'} </p></div>
            
          </div>
          <div className="news__text-parag"><p>{lang == 'ru' ? 'Погрузитесь в мир всемирной марки Lexus' : 'Immerse yourself in the world of the worldwide Lexus brand'}</p>
          </div>
      </div>
  </div>
  {automark.length ? automark.map((item) =><div className="service">
   

   <div className="credit">
       <div className="credit__block">
           <img src={tex} alt=""/>
           <div className="credit__text">
        

               <div className="credit__text-head "><p>{lang == 'ru' ? item.rutitle : item.entitle}</p></div>
               <p>{lang == 'ru' ? item.rudescription : item.endescription}</p>
               <div className="credit__btn">
               <NavLink to="/contacts">  <button className="black-btn"> <p>{lang == 'ru' ? 'Предложения' : 'Propose'}</p> <span className="line"></span></button></NavLink> 
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

export default History