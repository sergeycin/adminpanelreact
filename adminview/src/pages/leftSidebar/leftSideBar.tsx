import './leftSideBar.scss'
import lexus from '../../assets/img/lexus.svg'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPages } from '../../store/actions/pagesActions';
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import { pageSLice } from '../../store/slices/pagesSlice';






function LeftSidaBar(){

const dispatch = useAppDispatch()
const {error,loading,pages} = UseAppSelector(state => state.pagesSlice)

let page = pages.page;

useEffect(() => {
    dispatch(fetchPages())
  
},[])



  const [isOpen,setIsOpen] = useState<number>(0)

 const openList = (event: React.MouseEvent, num:number) =>{
isOpen === num ? setIsOpen(0) : setIsOpen(num)

 } 

    

    return(
        <div className="leftSidaBar">
           <div className="leftSideBar__content">

               <div className="leftSideBar__list">
               <div className="leftSideBar__list-item">
                      <h5 onClick={(e) => openList(e,1)}>Pages</h5>
                      {isOpen == 1 ?    <div className="leftSideBar__list-open">
                          <ul>
                              {page.map(p =>  <li><a href="">{p}</a></li>)}
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
                              <li><a href=""> Test Drive</a></li>
                             
                          </ul>
                      </div> : ''}
                    

                  </div>
               </div>

           </div>
        </div>

    );

}


export default LeftSidaBar;
