
// import './testDrive.scss'
// import './models.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ls from "../../assets/img/ls.png"
import banner from "../../assets/img/banner.jpg"
import { NavLink } from 'react-router-dom'

function Models() {
return(
  
<div className="wrapper">
<Header/>  
<div className="container">
    
    <div className="models__banner">
        <img src={banner} alt=""/>
    </div>

    <div className="models__wrap">
        <div className="models__row">
     <div className="models__item crossover" >
        <a href="model_single.html">   
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </a>  
            </div>
   
            <div className="models__item crossover">
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
            <div className="models__item crossover">
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
            
            <div className="sedan models__item" >
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
            <div className="models__item sedan"  >
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
            <div className="models__item" >
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
            <div className="models__item crossover">
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
            <div className="models__item crossover">
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
            <div className="models__item crossover">
                <h2>UX</h2>
                <p>Встречай рассвет в движении</p>
                <div className="models__image"><img src={ls} alt=""/></div>
            </div>
        </div>
    </div>
</div>

<Footer/>
    </div>

    )
}

export default Models