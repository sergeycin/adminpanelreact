import arrow from '../../assets/img/arrow.svg'
import './createModel.scss';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/loader';
import { AddField } from '../../store/actions/fieldActions';

interface LocationState {
    state:{
        arrayFields: string[];
    }
   

  }

function CreateModel() {
    const location = useLocation();
    const { state } = location as LocationState;
    const navigate= useNavigate();
    const {error,loading} = UseAppSelector(state => state.FieldSlice)
    const dispatch = useAppDispatch()
    console.log(state.arrayFields)
    const obj = state.arrayFields.reduce((newObj:any, item) => {
      newObj[item] = item;
      return newObj;
    }, {});

    console.log(obj)
    

 
    const [form,setForm] = useState<any>(obj)


    const backHandler = () =>{
        navigate(-1)
    }

    const changeHandler = (event:any) =>{
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    const saveHandler = (event:React.MouseEvent) =>{
        event.preventDefault()
        console.log(form)
        dispatch( AddField(form))
    }


    return(
        <>
           {loading && <Loader/>}
           <div className="wrapper__right">
            <div className="create">

                <div className="create__top">
                    <div className="arrow"><img onClick={backHandler} src={arrow} alt="" /></div>
                    <h2>Create New</h2>
                </div>

                <div className="create__center">
                  
                <form className="form">
                <div className="row">

                {
                    state.arrayFields.length ?
                state.arrayFields.map(field =>  
                    <div className="form__field">
                    <label htmlFor="">{field}</label>
                    <input  onChange={changeHandler} value={form.field}  name={field} type="text" className="form__input" />
                </div>
                    )
                    : error
                }
           <div className="form__field">
               <label htmlFor="">Email</label>
               <input type="text" className="form__input" />
           </div>

                </div>
                 <button onClick={saveHandler}  className="login-btn" >Save</button>
    </form> 


                </div>


            </div>
        </div>
        </>
      
    )
}

export default CreateModel;