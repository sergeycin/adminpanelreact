
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import './newslist.scss'
import newsfone from '../../assets/img/newsfone.jpg'
import newsimg from '../../assets/img/news.jpg'
import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { makeRequest } from "../../hooks/fetch.hook"
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { getNews } from "../../store/actions/newsActions"

function News() {
    const dispatch = useAppDispatch()
    const {error,loading,news} = UseAppSelector(state => state.newsSlice)
    
    
    useEffect(() => {
    
        dispatch(getNews())
        
        console.log(news)      
    },[])
  
    for(let item of news){
        for(let key of Object.keys(item)){
            if(!String(key).includes("en")){
            //    delete item[`${key}`]
            }
        }
       
    }
    
    return (
       <div className="wrapper">
      <Header/>


      <div className="news">
        <div className="news__image">   <img src={newsfone} alt=""/></div>
        <div className="news__text">
            <div  className="news__text-head"><p>Новости</p></div>
          
        </div>
        <div className="news__text-parag"><p> Узнайте о важных событиях нашего дилерского центра Lexus и будьте в курсе предстоящих мероприятий</p>
        </div>
    </div>
    <div className="container">
<div className="bread-block">
    <div className="bread">
        <div className="container">
        <ul className="breadcrumb">
            <li><a href="#">Главная</a></li>
            <li>Новости</li>
       
          </ul>
        </div>
    </div>
    
</div>

        <div className="newslist">
            <div className="container">
                <div className="newslist__row">
                <div className="newslist__item lexus_lc" >
                            <div className="newslist__image"><img src={newsimg} alt=""/></div>
                            <div className="newslist__text">
                  
                        <div className="newslist__text-head"><p>NEW LEXUS LS</p></div>
                        <p>Lexus объявляет о старте заказов на обновлённый флагманский седан Lexus LS в России с 21 апреля 2021 года.</p>
                        <div className="newslist__btn">
                            <NavLink to="/news/sample">  <button className="black-btn"> <p>Подробнее</p> <span className="line"></span></button></NavLink>  
                        </div>
                            </div>
                     
        
                      
                       </div>
                   
                    <div className="newslist__item service" >
                        <div className="newslist__image"><img src={newsimg} alt=""/></div>
                        <div className="newslist__text">
              
                    <div className="newslist__text-head"><p>NEW LEXUS LS</p></div>
                    <p>Lexus объявляет о старте заказов на обновлённый флагманский седан Lexus LS в России с 21 апреля 2021 года.</p>
                    <div className="newslist__btn">
                        <a href="">  <button className="black-btn"> <p>Подробнее</p> <span className="line"></span></button></a>  
                    </div>
                        </div>
                 
    
                  
                   </div>
             
                <div className="newslist__item lexus_lc" >
                    <div className="newslist__image"><img src={newsimg} alt=""/></div>
                    <div className="newslist__text">
          
                <div className="newslist__text-head"><p>NEW LEXUS LS</p></div>
                <p>Lexus объявляет о старте заказов на обновлённый флагманский седан Lexus LS в России с 21 апреля 2021 года.</p>
                <div className="newslist__btn">
                    <a href="">  <button className="black-btn"> <p>Подробнее</p> <span className="line"></span></button></a>  
                </div>
                    </div>
             

              
               </div>
    
            <div className="newslist__item service" >
                <div className="newslist__image"><img src={newsimg} alt=""/></div>
                <div className="newslist__text">
      
            <div className="newslist__text-head"><p>NEW LEXUS LS</p></div>
            <p>Lexus объявляет о старте заказов на обновлённый флагманский седан Lexus LS в России с 21 апреля 2021 года.</p>
            <div className="newslist__btn">
                <a href="">  <button className="black-btn"> <p>Подробнее</p> <span className="line"></span></button></a>  
            </div>
                </div>
         

          
           </div>

      <div className="newslist__item service" >
            <div className="newslist__image"><img src={newsimg} alt=""/></div>
            <div className="newslist__text">
  
        <div className="newslist__text-head"><p>NEW LEXUS LS</p></div>
        <p>Lexus объявляет о старте заказов на обновлённый флагманский седан Lexus LS в России с 21 апреля 2021 года.</p>
        <div className="newslist__btn">
            <a href="">  <button className="black-btn"> <p>Подробнее</p> <span className="line"></span></button></a>  
        </div>
            </div>
     

      
       </div>

  <div className="newslist__item lexus_lc" >
        <div className="newslist__image"><img src={newsimg}alt=""/></div>
        <div className="newslist__text">

    <div className="newslist__text-head"><p>NEW LEXUS LS</p></div>
    <p>Lexus объявляет о старте заказов на обновлённый флагманский седан Lexus LS в России с 21 апреля 2021 года.</p>
    <div className="newslist__btn">
        <a href="">  <button className="black-btn"> <p>Подробнее</p> <span className="line"></span></button></a>  
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

export default News