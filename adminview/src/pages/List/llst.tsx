import './list.scss'
import trash from '../../assets/img/trash.svg'

function List(){

    return(
        <>
            <div className="wrapper__right">
        <div className="list">
    

                <div className="list__top">
                    <h2>List</h2>
                    <div className="list__buttons">
                        <button className="createNew">+ Create new</button>
                    </div>
                </div>

                <div className="list__center">
                    <div className="list__center-top">
                       <div className="center__top-item trash"><img src={trash} alt="" /></div>
                       <div className="center__top-item"><p>id</p></div>
                       <div className="center__top-item"><p>En Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>Ru Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>image</p></div>
                    </div>

                    <div className="list__center-middle">
                        <div className="middle__item">
                        <div className="center__top-item trash"><img src={trash} alt="" /></div>
                       <div className="center__top-item"><p>id</p></div>
                       <div className="center__top-item"><p>En Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>Ru Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>image</p></div>
                        </div>
                    

                        <div className="middle__item">
                        <div className="center__top-item trash"><img src={trash} alt="" /></div>
                       <div className="center__top-item"><p>id</p></div>
                       <div className="center__top-item"><p>En Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>Ru Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>image</p></div>
                        </div>



                        <div className="middle__item">
                        <div className="center__top-item trash"><img src={trash} alt="" /></div>
                       <div className="center__top-item"><p>id</p></div>
                       <div className="center__top-item"><p>En Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>Ru Name</p></div>
                       <div className="center__top-item"><p>EN Description</p></div>
                       <div className="center__top-item"><p>image</p></div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </>
    )

}


export default List;
