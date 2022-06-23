import React from 'react';
import lexus from '../../assets/img/lexus.svg'
import car from '../../assets/img/car.svg'
import '../login/login.scss'


function Login() {
  
  return (
    <div className="Login">
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
          <input id="email" type="email" className="validate "/>
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
     
    </form> 

        </div>

      </div>
      <p>ok</p>
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
