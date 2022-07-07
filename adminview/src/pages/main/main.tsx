import React, { useContext, useEffect, useState } from 'react';
import lexus from '../../assets/img/lexus.svg'
import car from '../../assets/img/car.svg'
import './main.scss'
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';


function Main() {
  const navigate= useNavigate();
  const auth = useContext(AuthContext)
  // const message = useMessage()
  const {loading,error,request, clearError} = useHttp() 

    const [form,setForm] = useState({
        email: '', password:''
    })

    useEffect(()=>{
      // message(error)
      // alert(error)
      clearError()
    }, [error,clearError])


    const changeHandler = (event:any) =>{
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async (e:any) =>{
        e.preventDefault()
        try{
          const data = await request('/api/auth/register','POST',{...form})
        //   message(data.message)
          console.log('Data',data)
  
        }catch (e){
            console.log(e)
        }
      }


  return (
    <div className="login">
      <div className="login__block">

    

        <div className="login__right">
        <div className="login__right-name">
          <img src={car} alt="" />
          <h3>LEXUS</h3>
        </div>

          <form className="form">
      <div className="row">
      <div className="input-field col s12">
          <input id="email" type="email" className="validate " name='email'  value={form.email}
           onChange={changeHandler}/>
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"  name='password' value={form.password}
           onChange={changeHandler}/>
          <label htmlFor="password">Password</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
      <button onClick={registerHandler} className="login-btn" disabled={loading}  style={{marginRight:10}}>Create User</button>
   {/* <button type='submit' className='login-btn'>Login</button> */}
    </form> 

        </div>

      </div>
  
    </div>
  );
}

export default Main;
