import arrow from '../../assets/img/arrow.svg'
import './createModel.scss';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/loader';
import { AddField } from '../../store/actions/fieldActions';
import {uploadImage} from '../../store/actions/fieldActions';


interface LocationState {
    state:{
        arrayFields: string[];
    }
   

  }

function CreateModel() {
    const location = useLocation();
    const { state } = location as LocationState;
    const navigate= useNavigate();
    const {error,loading,message} = UseAppSelector(state => state.FieldSlice)
    const dispatch = useAppDispatch()
    const [fileState,setFile] = useState({})
  
    // console.log(state.arrayFields)
        const obj = state.arrayFields.reduce((newObj:any, item) => {
          newObj[item] = item;
          return newObj;
        }, {})

        const [form,setForm] = useState<any>(obj)

    // console.log(form)
    const backHandler = () =>{
        navigate(-1)
    }
    const fileHandler = (input:any) =>{
        // let files = input.files
        // console.log(input.target.files)
        setFile(input.target.files) 
}
    const changeHandler = (event:any) =>{

        setForm({ ...form, [event.target.name]: event.target.value})
    
    }

    const saveHandler = (event:React.MouseEvent) =>{
        event.preventDefault()
        // console.log(form)
        if(form.hasOwnProperty('image')){
            console.log(fileState)
            filesave(fileState)
            dispatch( AddField(form))
        }
        else{
            dispatch( AddField(form))
        }

      
       
  
    }
    const filesave = (files:any) =>{
        console.log(files)
        let maxFileSize = 8242880;
        let Data = new FormData();

        for(let file of files){
           
            if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
                // console.log('ok')
                // Data.append('file',file);
                // console.log(file)
                console.log('est file')
                Data.append("file", file);
           }
        }

        // dispatch(uploadImage(Data))
        // console.log(Data)
        fetch('/api/pages/sendimage', {
            method: 'POST',
            body: Data
          })
            .then(response => console.log(response))
            .catch(e => console.log('error',e))
    
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
                <p className='message'>{message}</p>
                <form className="form">
                <div className="row">

                {
                    state.arrayFields.length ?
                state.arrayFields.map(field =>  
                    
                    <div className={field == 'image' ? 'form__field image__field' : 'form__field'}>
                    <label htmlFor={field}>{field == 'image' ? 'Выберите изображение' : field }
                    <input  onChange={field == 'image' ? fileHandler : changeHandler} value={form.field} id={field}  name={field} key={field} type={field == 'image' ? 'file' : 'text'} className="form__input" />
                    </label>
         
                </div>
                    )
                    : error
                }
       
                {/* <div className="form__field">
                    <label htmlFor="">Download Image</label>
                    <input  onChange={e => fileHandler(e)} id='file-input' name="myFile" type="file"/>
                    <button   className="login-btn" >Отправить</button>
                </div> */}
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