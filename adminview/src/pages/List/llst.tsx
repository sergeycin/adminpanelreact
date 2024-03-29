import './list.scss'
import trash from '../../assets/img/trash.svg'
import list from '../../assets/img/list.svg'
import { useParams } from 'react-router-dom';
import { makeRequest } from "../../hooks/fetch.hooks"
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import React, { useEffect, useState } from 'react';
import { fieldList,deleteField } from '../../store/actions/fieldActions';
import Loader from '../loader/loader';
import { NavLink } from 'react-router-dom';


function List(){
    const params = useParams<'id'>()
    const dispatch = useAppDispatch()
    const {loading,fields} = UseAppSelector(state => state.FieldSlice)
    let nameFields:String[] = [] 
    let listFields:any[] = [] 
    const form = {model: params.id}
    const [fieldsChange,setChange] = useState<number>(0)
  

    useEffect (()=>{
        dispatch(fieldList(form))
    },[params,fieldsChange])
  
    // console.log(fields.titles)
    for(let field of fields.titles){
        if(field != '__v'  && field != '_id' ){
            nameFields.push(field)
        }
    }
    const removeField = (event:any) =>{
        event.preventDefault()
        let currentField = event.target
        let idCurrent = currentField.getAttribute("id")
        let IdObject = {
            _id : idCurrent
        }
        dispatch( deleteField(IdObject))
        setChange(fieldsChange + 1)
        // console.log(currentField.getAttribute("_id"))
    }
    const createDataList = () =>{
         listFields = [] 
        for (let key in fields.dataFields){
         
            let masItem = []
            for(let j in fields.dataFields[key]){
                if(j != '__v'  && j != '_id' )
                masItem.push(<div key={fields.dataFields[key].id} className="center__top-item"><p>{fields.dataFields[key][j].substring(0, 40)}..</p></div>)
            }
            listFields.push(
                <NavLink state={{data: fields.dataFields[key]}} to="/admin/watch">
             <div key={key}  className="middle__item">
                <div className="center__top-item trash"><img onClick={event => removeField(event)} id={fields.dataFields[key]._id} src={trash} alt="" /></div>
                {masItem}
                </div>
                </NavLink>
               
            )
        }
    }
    createDataList()
    return(
        <>
    {loading && <Loader/>}
   
            <div className="wrapper__right">
        <div className="list">


                <div className="list__top">
                    <h2>List {params.id}</h2>
                    <div className="list__buttons">
                        <NavLink state={{arrayFields: nameFields}} to="/admin/createNewModel">
                        <button className="createNew">+  Create new</button>
                        </NavLink>
                     
                    </div>
                </div>

                <div className="list__center">
                    <div className="list__center-top">
                        {
                           nameFields.length  ? <div className="center__top-item trash"><img src={list} alt="" /></div> : 'Данных в колеекции еще нету'
                           
                        }
                   

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
