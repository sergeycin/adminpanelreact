import arrow from '../../assets/img/arrow.svg'
import '../createNewModel/createModel.scss';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/loader';
import { AddField } from '../../store/actions/fieldActions';
import {uploadImage} from '../../store/actions/fieldActions';


interface LocationState {
    state:{
        data: any;
    }
   

  }

function WatchModel() {
    const location = useLocation();
    const { state } = location as LocationState;
    const navigate= useNavigate();
    const {error,loading,message} = UseAppSelector(state => state.FieldSlice)
    // const dispatch = useAppDispatch()
    const [fields,setFields] = useState<any>([])

    const backHandler = () =>{
        navigate(-1)
    }

    for(let key in state.data){
        if(key != '__v' && key != 'image') {
            fields.push(  <div className= {key == 'image' ? 'form__field image__field' : 'form__field'}>
            <label htmlFor={key}> {key}
            <input   value= {key == 'image' ? '' : state.data[key]} id= {state.data[key]}  name={key} key={key} type= {key == 'image' ? 'file' : 'text'} className="form__input" />
            </label>
    
        </div>)        
        }
        if(key == 'image'){
            fields.push(<img src={state.data[key]} alt="" />)
        }
    
    }


    return(
        <>
           {loading && <Loader/>}
           <div className="wrapper__right">
            <div className="create">

                <div className="create__top">
                    <div className="arrow"><img onClick={backHandler} src={arrow} alt="" /></div>
                    <h2>Watch Model</h2>
                </div>
           
                <div className="create__center">
                <p className='message'>{message}</p>
                <form className="form">
                <div className="row">

             {fields}
        
    
                </div>

                
    </form> 


                </div>


            </div>
        </div>
        </>
      
    )
}

export default WatchModel;