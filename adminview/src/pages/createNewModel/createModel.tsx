import arrow from '../../assets/img/arrow.svg'
import './createModel.scss';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

interface LocationState {
    state:{
        arrayFields: string[];
    }
   

  }

function CreateModel() {
    const location = useLocation();
    const { state } = location as LocationState;
    const navigate= useNavigate();

    const backHandler = () =>{
        navigate(-1)
    }


    return(
        
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
                    <input type="text" className="form__input" />
                </div>
                    )
                    : 'Что-то пошло не так'
                }
           <div className="form__field">
               <label htmlFor="">Email</label>
               <input type="text" className="form__input" />
           </div>

                </div>
                 <button  className="login-btn" >Save</button>
    </form> 


                </div>


            </div>
        </div>
    )
}

export default CreateModel;