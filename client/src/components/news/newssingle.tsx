
import news from '../../assets/img/news.jpg'
import './newslist.scss'
import './newssingle.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import { useLocation } from 'react-router-dom'

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
     
<br/>
<br/>
Коллекция привилегий для тех, кто привык к большему<br/>

Бренд представляет коллекцию привилегий Lexus, эксклюзивную для владельцев обновлённого Lexus LS. Мир премиального сервиса, роскоши и комфорта не заканчивается за стенами официального дилерского центра или при выходе из автомобиля. В рамках коллекции привилегий Lexus открывает персональный доступ к уникальным возможностям. В благодарность за доверие бренд предоставляет постоянным клиентам и будущим владельцам флагманского седана особые преимущества для комфортного и роскошного образа жизни, среди которых:
<br/>
1.   Отдых с персональными условиями проживания в роскошных отелях<br/>

2.   Элитные бизнес-клубы и возможность принять участие в эксклюзивных семинарах и форумах<br/>

3.   Премиальные фитнес и гольф клубы на особых условиях<br/>

4.   Доступ к закрытым презентации новых моделей бренда<br/>

5.   Эксклюзивный доступ к уникальным сервисам поддержки владельцев Lexus:<br/>
- Консьерж-сервис<br/>
- Юридическая поддержка<br/>
- Трансфер из аэропорта/в аэропорт<br/>
- Услуга "трезвый водитель"<br/>


        </div>
    </div>
    <Footer/>
</div>
)
}

export default NewsSingle