import './leftSideBar.scss'
import lexus from '../../assets/img/lexus.svg'
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPages } from '../../store/actions/pagesActions';
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import { pageSLice } from '../../store/slices/pagesSlice';






function LeftSidaBar(){

const dispatch = useAppDispatch()
const {error,loading,pages} = UseAppSelector(state => state.pagesSlice)
const navigate = useNavigate() 



useEffect(() => {

    dispatch(fetchPages())
 
    
},[])



  const [isOpen,setIsOpen] = useState<number>(0)

 const openList = (event: React.MouseEvent, num:number) =>{
isOpen === num ? setIsOpen(0) : setIsOpen(num)
 } 

 const goList = (event:React.MouseEvent,p:string) =>{
    event.preventDefault()
    navigate(`admin/${p}`)
 }
    

    return(
        <div className="leftSidaBar">
           <div className="leftSideBar__content">

               <div className="leftSideBar__list">
               <div className="leftSideBar__list-item">
                      <h5 onClick={(e) => openList(e,1)}>Pages</h5>
                      {isOpen == 1 ?    <div className="leftSideBar__list-open">
                          <ul>

                              {
                               pages.Page ?   
                              pages.Page.map(p =>  <li><a key={p} onClick={(event) => goList(event,p)} href="#">{p}</a></li>) : ''
                              }
                          </ul>
                      </div> : ''}
                    

                  </div>

                  <div className="leftSideBar__list-item">
                      <h5 onClick={(e) => openList(e,2)}>Users</h5>
                      {isOpen == 2 ?    <div className="leftSideBar__list-open">
                          <ul>
                              <li><NavLink to="/admin/create"> Create User</NavLink></li>
                              <li><a href=""> Change Users</a></li>
                          </ul>
                      </div> : ''}
                     

                  </div>


                  <div className="leftSideBar__list-item">
                      <h5 onClick={(e) => openList(e,3)}>Forms</h5>
                      {isOpen == 3 ?    <div className="leftSideBar__list-open">
                          <ul>
                          {pages.Forms.map(p =>  <li key={p}><a href="">{p}</a></li>)}
                             
                          </ul>
                      </div> : ''}
                    

                  </div>
               </div>

           </div>
        </div>

    );

}


export default LeftSidaBar;
