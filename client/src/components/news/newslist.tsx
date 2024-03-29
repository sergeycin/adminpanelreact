
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import './newslist.scss'
import newsfone from '../../assets/img/newsfone.jpg'
import newsimg from '../../assets/img/news.jpg'
import { NavLink } from "react-router-dom"
import { useContext, useEffect } from "react"
import { makeRequest } from "../../hooks/fetch.hook"
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { getNews } from "../../store/actions/newsActions"
import {  useLanguage } from "../../context/LanguageContext";
import Loader from "../loader/loader"
function News() {
    const dispatch = useAppDispatch()
    const {error,loading,news} = UseAppSelector(state => state.newsSlice)
    const {lang,toggleLanguage} = useLanguage()
    
    useEffect(() => {
    
        
        dispatch(getNews())
        console.log(news)      
    },[])
  
    return (
       <div className="wrapper">
        {loading && <Loader/>}
      <Header/>


      <div className="news">
        <div className="news__image">   <img src={newsfone} alt=""/></div>
        <div className="news__text">
            <div  className="news__text-head"><p>{lang  == 'ru' ? 'Новости' : 'News'}</p></div>
          
        </div>
        <div className="news__text-parag"><p> {lang  == 'ru' ? 'Узнайте о важных событиях нашего дилерского центра Lexus и будьте в курсе предстоящих мероприятий' : 'Find out about important events at our Lexus Dealership and stay up to date on upcoming events'}</p>
        </div>
    </div>
    <div className="container">
{/* <div className="bread-block">
    <div className="bread">
        <div className="container">
        <ul className="breadcrumb">
            <li><a href="#">Главная</a></li>
            <li>Новости</li>
       
          </ul>
        </div>
    </div>
    
</div> */}

        <div className="newslist">
            <div className="container">
                <div className="newslist__row">
                    {news.length ? news.map((item) =>        <div className="newslist__item " >
                            <div className="newslist__image"><img src={item.image} alt=""/></div>
                            <div className="newslist__text">
                  
                        <div className="newslist__text-head"><p>{lang  == 'ru' ? item.rutitle : item.entitle}</p></div>
                        <p>{lang  == 'ru' ? item.rudescription : item.endescription}</p>
                        <div className="newslist__btn">
                            <NavLink state={{title: lang  == 'ru' ? item.rutitle : item.entitle, description:lang  == 'ru' ? item.rudescription : item.endescription,image: item.image}} to="/news/sample">  <button className="black-btn"> <p>Подробнее</p> <span className="line"></span></button></NavLink>  
                        </div>
                            </div>
                     
        
                      
                       </div>) : ''}

            </div>
        </div>
        </div>
</div>

      
      <Footer/>
</div>
)

}

export default News