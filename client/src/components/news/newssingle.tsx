
import news from '../../assets/img/news.jpg'
import './newslist.scss'
import './newssingle.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

interface LocationState {
    state:{
        title: string,
        description: string,
        image:string
    }
   

  }

function NewsSingle() {
    const location = useLocation();
    const { state } = location as LocationState;
    const {lang,toggleLanguage} = useLanguage()
return(
  
<div className="wrapper">
<Header/>  

{/* <div className="bread-block">
    <div className="bread">
        <div className="container">
        <ul className="breadcrumb">
            <li><a href="#">Главная</a></li>
            <li>Новости</li>
            <li>Sample</li>
          </ul>
        </div>
    </div>
    
</div> */}


    <div className="newscontent">
 
        <div className="newscontent__text">
            <p>НОВОСТИ</p>
            <div  className="newscontent__text-head"><p>{state.title}</p></div>
          
        </div>
        <div className="newscontent__image">  <img src={state.image} alt=""/></div>
        <div className="newscontent__parag">
            {state.description}
            <br />
            <br />
            <br />
     {lang == 'ru' ? `
      
      
     Коллекция привилегий для тех, кто привык к большему 
     
     Бренд представляет коллекцию привилегий Lexus, эксклюзивную для владельцев обновлённого Lexus LS. Мир премиального сервиса, роскоши и комфорта не заканчивается за стенами официального дилерского центра или при выходе из автомобиля. В рамках коллекции привилегий Lexus открывает персональный доступ к уникальным возможностям. В благодарность за доверие бренд предоставляет постоянным клиентам и будущим владельцам флагманского седана особые преимущества для комфортного и роскошного образа жизни, среди которых:
      
     1.   Отдых с персональными условиями проживания в роскошных отелях 
     
     2.   Элитные бизнес-клубы и возможность принять участие в эксклюзивных семинарах и форумах 
     
     3.   Премиальные фитнес и гольф клубы на особых условиях 
     
     4.   Доступ к закрытым презентации новых моделей бренда 
     
     5.   Эксклюзивный доступ к уникальным сервисам поддержки владельцев Lexus: 
     - Консьерж-сервис 
     - Юридическая поддержка 
     - Трансфер из аэропорта/в аэропорт 
     - Услуга "трезвый водитель" 
     `: `
      
 
A collection of privileges for those who are used to more 

The brand presents a collection of Lexus privileges exclusive to owners of the updated Lexus LS. The world of premium service, luxury and comfort does not end outside the walls of an official dealership or when leaving the car. As part of the collection of privileges, Lexus provides personal access to unique opportunities. In gratitude for the trust, the brand provides regular customers and future owners of the flagship sedan with special advantages for a comfortable and luxurious lifestyle, including:
 
1. Vacation with personal living conditions in luxury hotels 

2. Elite business clubs and the opportunity to participate in exclusive seminars and forums 

3. Premium fitness and golf clubs on special conditions 

4. Access to closed presentations of new brand models 

5. Exclusive access to unique support services for Lexus owners: 
- Concierge service 
- Legal support 
- Transfer from/to the airport 
- Service "sober driver" 
     `}



        </div>
    </div>
    <Footer/>
</div>
)
}

export default NewsSingle