import React, { useContext } from "react";
import './header.scss'
import lexus from '../../assets/img/lexus.svg'
import user from '../../assets/img/user.svg'
import door from '../../assets/img/door.svg'
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";



function Navbar(){
    const auth = useContext(AuthContext)
    const navigate= useNavigate();

    const logoutHandler = () =>{
        try {
            navigate("/admin")
            auth.logout()
            
       
    
        }
       catch(e)
       {
           console.log(e)
       }
    }

    return(
        <div className="header">
            <div className="header__left">
                <div className="header__name"><h2><NavLink to="/admin/main">LEXUS</NavLink> </h2></div>
                <div className="header__logo"><img src={lexus} alt="" /></div>
            </div>
            <div className="header__right">
                
                    <img className="user-image" src={user} alt="" />
                    <p>admin@lexus.com</p>
                    <img onClick={logoutHandler} className="door-image" src={door} alt="" />
         
            </div>
        </div>

    );

}


export default Navbar;

