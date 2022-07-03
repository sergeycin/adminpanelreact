import React, { useContext, useEffect, useState } from 'react';
import lexus from '../../assets/img/lexus.svg'
import car from '../../assets/img/car.svg'
import './login.scss'
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';


function Login() {
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

  const loginHandler = async () =>{
    try{
    
      const data = await request('/api/auth/login','POST',{...form})
      auth.login(data.token,data.userId)
      // message(data.message)
      console.log('Data',data)
      navigate("/create")
    }catch (e){}
  }



  return (
    <div className="login">
      <div className="login__block">

        <div className="login__left">

          <div className="login__text">
            <h2>WELCOME</h2>
            <p>
            This is admin panel for change application Lexus
            </p>
          </div>
          <img src={lexus} alt="" />

        </div>

        <div className="login__right">
        <div className="login__right-name">
          <img src={car} alt="" />
          <h3>LEXUS</h3>
        </div>

          <form className="form">
      <div className="row">
      <div className="input-field col s12">
          <input id="email" type="email" className="validate "   value={form.email}
           onChange={changeHandler}/>
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"  value={form.password}
           onChange={changeHandler}/>
          <label htmlFor="password">Password</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
      <button onClick={loginHandler} className="login-btn" disabled={loading}  style={{marginRight:10}}>Login</button>
   {/* <button type='submit' className='login-btn'>Login</button> */}
    </form> 

        </div>

      </div>
  
    {/* <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
          <label htmlFor="disabled">Disabled</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          This is an inline input field:
          <div className="input-field inline">
            <input id="email_inline" type="email" className="validate"/>
            <label htmlFor="email_inline">Email</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
    </form> */}

    </div>
  );
}

export default Login;
