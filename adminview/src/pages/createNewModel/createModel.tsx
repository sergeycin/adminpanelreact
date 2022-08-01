import arrow from '../../assets/img/arrow.svg'
import './createModel.scss';
import { useLocation } from "react-router-dom";

function CreateModel() {
    const location = useLocation();
  const { state } = location;

//   console.log(state.arrayFields);

    return(
        <div className="wrapper__right">
            <div className="create">

                <div className="create__top">
                    <div className="arrow"><img src={arrow} alt="" /></div>
                    <h2>Create New</h2>
                </div>

                <div className="create__center">
                  
                <form className="form">
                <div className="row">

           <div className="form__field">
               <label htmlFor="">Email</label>
               <input type="text" className="form__input" />
           </div>

           
           <div className="form__field">
               <label htmlFor="">Email</label>
               <input type="text" className="form__input" />
           </div>


           <div className="form__field">
               <label htmlFor="">Email</label>
               <input type="text" className="form__input" />
           </div>



           <div className="form__field">
               <label htmlFor="">Email</label>
               <input type="text" className="form__input" />
           </div>



           <div className="form__field">
               <label htmlFor="">Email</label>
               <input type="text" className="form__input" />
           </div>


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