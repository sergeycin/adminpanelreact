import './list.scss'

function List(){

    return(
        <>
        <div className="list">
            <div className="list__content">

                <div className="list__top">
                    <h2>List</h2>
                    <div className="list__buttons">
                        <button className="create">+ Create new</button>
                    </div>
                </div>

                <div className="list__block"></div>

            </div>
        </div>
        </>
    )

}


export default List;
