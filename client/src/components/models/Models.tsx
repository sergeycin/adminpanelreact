
// import './testDrive.scss'
// import './models.scss'
import { Header } from "../layouts/header"
import { Footer } from "../layouts/footer"
import ls from "../../assets/img/ls.png"
import banner from "../../assets/img/banner.jpg"
import { NavLink } from 'react-router-dom'
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { useLanguage } from "../../context/LanguageContext"
import { useEffect } from "react"
import { getModels } from "../../store/actions/modelsAction"
import  {Swiper,SwiperSlide}  from 'swiper/react';
import { Autoplay, Pagination} from "swiper";
import Loader from "../loader/loader"
import ModelsTypes from "./typesModels"
import 'swiper/css';
import 'swiper/css/pagination';
function Models() {
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
<div className="container">
<ModelsTypes />
    <div className="models__banner">
    <Swiper

modules={[Pagination,Autoplay]}
slidesPerView={1}
spaceBetween={20}
centeredSlides={true}
pagination={{ clickable: true }}
autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
>
{models.length ? models.map((item) =>
  <SwiperSlide>
  <img src={item.image} alt="" />
  </SwiperSlide>
  
  ) : ''}


</Swiper>
    </div>

    <div className="models__wrap">
        <div className="models__row">
        {models.length ? models.map((item) =><div className="models__item crossover" >
  
  <h2>{item.title}</h2>
  <p>{lang == 'ru' ? item.rudescription : item.endescription}</p>
  <div className="models__image"><img src={item.image} alt=""/></div>
<p>{item.price}</p>
</div>) : ''}
  
        </div>
    </div>
</div>

<Footer/>
    </div>

    )
}

export default Models