import './list.scss'
import trash from '../../assets/img/trash.svg'
import { useParams } from 'react-router-dom';
import { makeRequest } from "../../hooks/fetch.hooks"
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fieldList } from '../../store/actions/fieldActions';


function List(){
    const params = useParams<'id'>()
    const dispatch = useAppDispatch()
const {error,loading,fields} = UseAppSelector(state => state.FieldSlice)
let nameFields:String[] = [] 
let listFields:any[] = [] 
    const form = {model: params.id}
  
    
    useEffect (()=>{
        dispatch(fieldList(form))
       
        
    },[])

    for(let field in fields[0]){
        if(field != '__v'){
            nameFields.push(field)
        }
       
    }

    const createDataList = () =>{
        
        for (let key in fields){
            let masItem = []
   
            
            for(let j in fields[key]){
                masItem.push(<div key={fields[key].id} className="center__top-item"><p>{fields[key][j]}</p></div>)
            }

            listFields.push(
                <div key={key} className="middle__item">
                <div className="center__top-item trash"><img src={trash} alt="" /></div>
                {masItem}
                
                </div>
            
                
            )
        }
    }


   
    createDataList()
    

    return(
        <>
            <div className="wrapper__right">
        <div className="list">


                <div className="list__top">
                    <h2>List {params.id}</h2>
                    <div className="list__buttons">
                        <button className="createNew">+ Create new</button>
                    </div>
                </div>

                <div className="list__center">
                    <div className="list__center-top">
                       <div className="center__top-item trash"><img src={trash} alt="" /></div>

                          {nameFields.map(field =>   <div key={field.toString()} className="center__top-item"><p>{field}</p></div>)}
                
                    </div>

                    <div className="list__center-middle">
              {listFields}
                    </div>
                </div>
        </div>
        </div>
        </>
    )

}


export default List;
