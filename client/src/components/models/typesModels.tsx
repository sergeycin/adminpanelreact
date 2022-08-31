
// import './testDrive.scss'
// import './models.scss'
import { useAppDispatch, UseAppSelector } from "../../hooks/redux"
import { useLanguage } from "../../context/LanguageContext"
import { useEffect } from "react"
import { getModels, getTypes } from "../../store/actions/modelsAction"



function ModelsTypes() {
    const dispatch = useAppDispatch()
    const {lang,toggleLanguage} = useLanguage()
    const {error,loading,types} = UseAppSelector(state => state.modelsSlice)
    useEffect(()=>{
        dispatch(getTypes())
    },[])
return(
  

<div className="models__filter">
            <div className="container">
                <div className="models__filter-row">
            <div className="models__name">{lang == 'ru' ? 'ТИП КУЗОВА' : 'BODY TYPE'}</div>
            <ul>
            {types.length ? types.map((item) =><li>{lang == 'ru' ? item.rutitle : item.entitle}</li> ) : ''}
                
                {/* <li id="models__item-btn"  className="">Все</li>
                <li id="sedan-btn">Седаны</li>
                <li id="cupe-btn">Купе</li>
                <li id="crossover-btn">Кроссоверы</li>
                <li id="gibrid-btn">Гибрид</li>
                <li id="gip-btn">Внедорожники</li>
                <li id="concept-btn">Концепт-кары</li> */}
            </ul>
        </div>
    </div>
</div>




    )
}

export default ModelsTypes